import React, { Component } from 'react';
import Category from '../../components/Category/Category';
import { getProductsFromCategoryAndQuery } from '../../services/api';
import Card from '../../components/Card/Card';
import BtnCart from '../../components/BtnCart/BtnCart';
import Header from '../../components/Header/Header';

import './Home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      value: '',
      quantity: 0,
      productsCart: [],
    };
  }

  componentDidMount() {
    this.getFromLocalStorageQunatityProduct();
  }

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ value });
  }

  getProduct = async (categoryId = '', query = '') => {
    getProductsFromCategoryAndQuery(categoryId, query)
      .then((data) => this.setState({ products: data.results }));
  }

  getFromLocalStorageQunatityProduct = () => {
    if (localStorage.getItem('cartItems') === null) {
      return localStorage.setItem('cartItems', JSON.stringify([]));
    }
    const itemsList = JSON.parse(localStorage.getItem('cartItems'));
    this.setState(({
      productsCart: itemsList,
    }), () => {
      const { productsCart } = this.state;
      this.setState({ quantity: productsCart
        .reduce((acc, current) => parseFloat(acc) + parseFloat(current.quantity), 0) });
    });
  }

  render() {
    const { value, products, quantity } = this.state;
    return (
      <div>
        <BtnCart quantity={ quantity } className="content-home__btn-cart" />
        <Header
          handleChange={ this.handleChange }
          value={ value }
          onClick={ () => this.getProduct('', value) }
        />
        <div className="container-home__content">
          <Category getProduct={ this.getProduct } />
          <div className="container-home__cards">
            <Card
              productArray={ products }
              getFromLocalStorageQunatityProduct={
                this.getFromLocalStorageQunatityProduct
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
