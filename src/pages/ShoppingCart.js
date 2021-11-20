import React from 'react';
import BtnCart from '../components/BtnCart';
import { getProductsFromId } from '../services/api';

class ShoppingCart extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      product: [],
    };
    this.getFromLocalStorage = this.getFromLocalStorage.bind(this);
  }

  componentDidMount() {
    this.getFromLocalStorage();
  }

  getFromLocalStorage() {
    if (localStorage.getItem('cartItems') === null) {
      return localStorage.setItem('cartItems', []);
    }
    const itemsList = JSON.parse(localStorage.getItem('cartItems'));
    itemsList.map((value) => (
      getProductsFromId(value)
        .then((response) => this.setState((prevState) => ({
          product: [...prevState.product, response],
        })))
    ));
  }

  render() {
    const { product } = this.state;
    return (
      <>
        <BtnCart />
        {product.length === 0 && (
          <span
            data-testid="shopping-cart-empty-message"
          >
            Seu carrinho está vazio
          </span>)}
        <div>
          {product.map((value) => (
            <div key={ value.id }>
              <span data-testid="shopping-cart-product-name">
                {value.title}
                {' '}
              </span>
              <img src={ value.thumbnail } alt={ value.title } />
              <span>
                {`R$:${value.price}`}
                {' '}
              </span>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default ShoppingCart;
