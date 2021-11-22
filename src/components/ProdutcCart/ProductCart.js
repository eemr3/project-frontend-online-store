import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCart extends Component {
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
    if (localStorage.getItem('cartItems') === null) {
      return localStorage.setItem('cartItems', JSON.stringify([]));
    }

    const itemsList = JSON.parse(localStorage.getItem('cartItems'));
    this.setState((prevState) => (
      { productList: [...itemsList,
        { idProduct: value, qtd: prevState.clicks }],
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
    const { product } = this.props;
    return (
      <div
        data-testid="product"
        className="card-product"
      >
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
    );
  }
}

ProductCart.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ProductCart;
