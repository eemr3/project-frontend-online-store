import React from 'react';
import { Link } from 'react-router-dom';
import ItemProductCart from '../../components/ItemProductCart/ItemProductCart';
// import { getProductsFromId } from '../../services/api';

import './ShoppingCart.css';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      totalPrices: 0,
    };
  }

  componentDidMount() {
    this.getFromLocalStorage();
  }

  getFromLocalStorage = () => {
    if (localStorage.getItem('cartItems') === null) {
      return localStorage.setItem('cartItems', JSON.stringify([]));
    }
    const itemsList = JSON.parse(localStorage.getItem('cartItems'));
    this.setState(({
      products: itemsList,
    }), () => {
      const { products } = this.state;
      this.setState({ totalPrices: products
        .reduce((acc, current) => parseFloat(acc) + parseFloat(current.price), 0) });
    });
  }

  render() {
    const { products, totalPrices } = this.state;
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
        {products.length === 0 && (
          <span
            className="empty-cart"
            data-testid="shopping-cart-empty-message"
          >
            Seu carrinho está vazio
          </span>)}
        <div>
          {products.map((product, index) => (
            <ItemProductCart
              key={ `${product.id}${index}` }
              product={ product }
            />
          ))}
          <p>{totalPrices}</p>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
