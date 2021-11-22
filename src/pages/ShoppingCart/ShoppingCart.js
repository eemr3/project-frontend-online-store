import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromId } from '../../services/api';

import './ShoppingCart.css';

class ShoppingCart extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      product: [],
      sum: 0,
    };
    this.getFromLocalStorage = this.getFromLocalStorage.bind(this);
  }

  componentDidMount() {
    this.getFromLocalStorage();
    // this.getSoma();
  }

  getFromLocalStorage() {
    if (localStorage.getItem('cartItems') === null) {
      return localStorage.setItem('cartItems', JSON.stringify([]));
    }
    const itemsList = JSON.parse(localStorage.getItem('cartItems'));

    itemsList.filter((item, index, array) => array
      .indexOf(item) === index).map((value) => (
      getProductsFromId(value.idProduct)
        .then((response) => this.setState((prevState) => ({
          product: [...prevState.product, response], sum: value.qtd,
        })))
    ));
  }

  // getSoma = () => {
  //   if (localStorage.getItem('soma') === null) return localStorage.setItem('soma', 0);
  //   const soma = JSON.parse(localStorage.getItem('soma'));
  //   this.setState(() => ({
  //     sum: soma,
  //   }));
  // }

  render() {
    const { product, sum } = this.state;
    return (
      <div className="container-shopping-cart">
        <div className="shopping-cart__title">
          <Link to="/">
            <i className="fas fa-home" />
          </Link>
          <h2>
            <i className="fas fa-shopping-cart" />
            Carrinho de compras
          </h2>
        </div>
        {product.length === 0 && (
          <span
            className="empty-cart"
            data-testid="shopping-cart-empty-message"
          >
            Seu carrinho está vazio
          </span>)}
        <div>
          {product.map((value, index) => (
            <div key={ `${value.id}${index}` } className="container-cart__product">
              <button type="button">
                <label htmlFor="btn-close">
                  {' '}
                  <i className="fas fa-times" />
                </label>
              </button>
              <img src={ value.thumbnail } alt={ value.title } />
              <p data-testid="shopping-cart-product-name">
                {value.title}
                {' '}
              </p>
              <div className="cart__control-quantity">
                <button
                  data-testid="product-increase-quantity"
                  type="button"
                  onClick={ () => this.setState((prevState) => ({
                    sum: prevState.sum + 1 })) }
                >
                  <label htmlFor="btn">
                    {' '}
                    <i className="fas fa-plus" />
                  </label>
                </button>
                <span data-testid="shopping-cart-product-quantity">{ sum }</span>
                <button
                  data-testid="product-decrease-quantity"
                  type="button"
                  onClick={ () => this.setState((prevState) => (
                    { sum: prevState.sum - 1 < 0 ? 0 : sum - 1 })) }
                >
                  <label htmlFor="btn">
                    {' '}
                    <i className="fas fa-minus" />
                  </label>
                </button>
              </div>
              <span>
                {`R$:${value.price}`}
                {' '}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
