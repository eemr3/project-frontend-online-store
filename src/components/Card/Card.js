import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Card.css';
// import ProductCart from '../ProdutcCart/ProductCart';

class Card extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
      clicks: 0,
    };
  }

  handleClick = ({ target }) => {
    const { value } = target;
    // const { productArray } = this.props;
    // const { clicks } = this.state;

    this.setState((prevState) => (
      { productList: [...prevState.productList,
        { idProduct: value, qtd: prevState.clicks + 1 }],
      }), () => {
      const { productList, clicks } = this.state;
      localStorage.setItem('cartItems', JSON.stringify(productList));
      localStorage.setItem('soma', JSON.stringify(clicks));
      this.setState((prevState) => ({
        clicks: prevState.clicks + 1,
      }));
    });
  }

  render() {
    const { productArray } = this.props;
    return (
      productArray.map((product) => (
        <div key={ product.id } data-testid="product" className="card-product">
          <Link
            to={ `/product/${product.id}` }
            data-testid="product-detail-link"
          >
            <img src={ product.thumbnail } alt={ product.title } />
            <span>
              {product.title}
              {' '}
            </span>
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
            Adicionar ao carrinho
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
