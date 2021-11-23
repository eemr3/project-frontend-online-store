import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonAdd extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 0,
    };
  }

  setProductStorage = (product) => {
    const responseStorage = localStorage.getItem('cartItems');
    const productStorage = responseStorage
      ? JSON.parse(localStorage.getItem('cartItems')) : [];

    const filteredeStorage = productStorage.filter((item) => item.id !== product.id);

    if (productStorage) {
      const listProdutcts = [...filteredeStorage, product];
      localStorage.setItem('cartItems', JSON.stringify(listProdutcts));
    } else {
      localStorage.setItem('cartItems', JSON.stringify([product]));
    }
  }

    handleClick = () => {
      const { product: { id, title, thumbnail, price } } = this.props;
      this.setState((prevState) => ({ quantity: prevState.quantity + 1 }), () => {
        const { quantity } = this.state;
        const product = { id, title, thumbnail, price, quantity };
        this.setProductStorage(product);
      });
    }

    render() {
      return (
        <button
          type="button"
          onClick={ this.handleClick }
          data-testid="product-add-to-cart"
        >
          Adicionar ao carrinho
        </button>
      );
    }
}

ButtonAdd.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }),
};

ButtonAdd.defaultProps = {
  product: {
    id: '',
    title: '',
    thumbnail: '',
    price: 0,
  },
};
export default ButtonAdd;
