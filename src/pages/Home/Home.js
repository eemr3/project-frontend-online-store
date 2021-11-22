import React, { Component } from 'react';
import BtnCart from '../../components/BtnCart/BtnCart';
import Category from '../../components/Category/Category';
import { getProductsFromCategoryAndQuery } from '../../services/api';
import Card from '../../components/Card/Card';

import './Home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      value: '',
    };
  }

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ value });
  }

  getProduct = async (categoryId = '', query = '') => {
    getProductsFromCategoryAndQuery(categoryId, query)
      .then((data) => this.setState({ products: data.results }));
  }

  render() {
    const { value, products } = this.state;
    return (
      <div>
        <header className="container-home__header">
          <div className="content-header__input-btn">
            <label htmlFor="search" data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
              <input
                data-testid="query-input"
                type="text"
                name="search"
                id="search"
                value={ value }
                onChange={ this.handleChange }
              />
            </label>
            <button
              type="button"
              onClick={ () => this.getProduct('', value) }
              data-testid="query-button"
            >
              Buscar
            </button>
          </div>
          <BtnCart className="content-home__btn-cart" />
        </header>
        <div className="container-home__content">
          <Category getProduct={ this.getProduct } />
          <div className="container-home__cards">
            <Card productArray={ products } />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
