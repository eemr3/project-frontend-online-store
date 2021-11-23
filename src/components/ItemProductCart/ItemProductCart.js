import React, { Component } from 'react';

class ItemProductCart extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="container-cart__product">
        <button type="button">
          <label htmlFor="btn-close">
            {' '}
            <i className="fas fa-times" />
          </label>
        </button>
        <img src={ product.thumbnail } alt={ product.title } />
        <p data-testid="shopping-cart-product-name">
          {product.title}
          {' '}
        </p>
        <div className="cart__control-quantity">
          <button
            data-testid="product-increase-quantity"
            type="button"
            onClick={ () => {} }
          >
            <label htmlFor="btn">
              {' '}
              <i className="fas fa-plus" />
            </label>
          </button>
          <span
            data-testid="shopping-cart-product-quantity"
          >
            { product.quantity }

          </span>
          <button
            data-testid="product-decrease-quantity"
            type="button"
            onClick={ () => { } }
          >
            <label htmlFor="btn">
              {' '}
              <i className="fas fa-minus" />
            </label>
          </button>
        </div>
        <span>
          {`R$:${product.price}`}
          {' '}
        </span>
      </div>
    );
  }
}

export default ItemProductCart;
