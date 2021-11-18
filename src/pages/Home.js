import React, { Component } from 'react';
import BtnCart from '../componets/BtnCart';
import Category from '../componets/Category';

class Home extends Component {
  render() {
    return (
      <div>
        <BtnCart />
        <label htmlFor="search" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input
            type="text"
            name="search"
            id="search"
          />
        </label>
        <Category />
      </div>
    );
  }
}

export default Home;
