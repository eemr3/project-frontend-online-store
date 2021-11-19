import React, { Component } from 'react';
import BtnCart from '../componets/BtnCart';
import Category from '../componets/Category';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Card from '../componets/Card';

class Home extends Component {

  constructor(props) {
    super();
    this.state = {
      products: [],
      value: '',
    }
  }
  // componentDidMount() {
  //   this.getProduct(categoryId, query);
  // }

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ value: value, })
  }

  getProduct = async (categoryId = '', query) => {
    getProductsFromCategoryAndQuery(categoryId, query)
      .then((result) => this.setState({ products: result }));
  }

  render() {
    const { value, products } = this.state;
    return (
      <div>
        <BtnCart />
        <label htmlFor="search" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input
            data-testid="query-input"
            type="text"
            name="search"
            id="search"
            value={value}
            onChange={this.handleChange}
          />
        </label>
        <button
          type="button"
          onClick={() => this.getProduct('', value)}
          data-testid="query-button"
        >Buscar</button>
        <Category />
        <Card productArray={products} />
      </div>
    );
  }
}

export default Home;
