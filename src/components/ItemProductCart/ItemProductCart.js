import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemProductCart extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
      productList: [],
      availableQuantity: 0,
    };
  }

  componentDidMount() {
    this.getProductValues();
  }

  handleClickIncrement = () => {
    const { availableQuantity, count } = this.state;
    if (count <= availableQuantity) {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    }
  }

  handleClickDecrement = () => {
    this.setState((prevState) => ({
      count: prevState.count > 0 ? prevState.count - 1 : 0,
    }));
  }

  getProductValues = () => {
    const { product } = this.props;
    this.setState({
      productList: product,
      count: product.quantity,
      availableQuantity: product.availableQuantity,
    });
  }

  render() {
    const { productList, count } = this.state;
    return (
      <div className="container-cart__product">
        <button type="button">
          <label htmlFor="btn-close">
            {' '}
            <i className="fas fa-times" />
          </label>
        </button>
        <img src={ productList.thumbnail } alt={ productList.title } />
        <p data-testid="shopping-cart-product-name">
          {productList.title}
          {' '}
        </p>
        <div className="cart__control-quantity">
          <button
            data-testid="product-increase-quantity"
            type="button"
            onClick={ this.handleClickIncrement }
          >
            <label htmlFor="btn">
              {' '}
              <i className="fas fa-plus" />
            </label>
          </button>
          <span
            data-testid="shopping-cart-product-quantity"
          >
            { count }

          </span>
          <button
            data-testid="product-decrease-quantity"
            type="button"
            onClick={ this.handleClickDecrement }
          >
            <label htmlFor="btn">
              {' '}
              <i className="fas fa-minus" />
            </label>
          </button>
        </div>
        <span>
          {`R$:${productList.price * count}`}
          {' '}
        </span>
      </div>
    );
  }
}

ItemProductCart.propTypes = {
  product: PropTypes.shape({
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    availableQuantity: PropTypes.number,
  }),
};

ItemProductCart.defaultProps = {
  product: {
    thumbnail: '',
    title: '',
    price: 0,
    quantity: 0,
    availableQuantity: 0,
  },
};
export default ItemProductCart;
