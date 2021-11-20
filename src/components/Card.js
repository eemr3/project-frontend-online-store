import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
      clicks: 1,
    };
  }

  handleClick = ({ target }) => {
    const { value } = target;
    this.setState((prevState) => (
      { productList: [...prevState.productList, value] }), () => {
      const { productList } = this.state;
      localStorage.setItem('cartItems', JSON.stringify(productList));
      this.setState((prevState) => ({
        clicks: prevState.clicks + 1,
      }));
    });
    const { clicks } = this.state;
    localStorage.setItem('soma', JSON.stringify(clicks));
  }

  render() {
    const { productArray } = this.props;
    return (
      productArray.map((product) => (
        <div key={ product.id } data-testid="product">
          <Link
            to={ `/product/${product.id}` }
            data-testid="product-detail-link"
          >
            <span>
              {product.title}
              {' '}
            </span>
            <img src={ product.thumbnail } alt={ product.title } />
            <span>
              {`R$:${product.price}`}
              {' '}
            </span>
          </Link>
          <button
            type="button"
            onClick={ this.handleClick }
            value={ product.id }
            data-testid="product-add-to-cart"
          >
            adicionar ao Carrinho
          </button>
        </div>
      ))
    );
  }
}

Card.propTypes = {
  productArray: PropTypes
    .arrayOf(PropTypes.shape({ name: PropTypes.string })).isRequired,
};
export default Card;
