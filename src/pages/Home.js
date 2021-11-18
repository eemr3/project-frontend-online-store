import React, { Component } from 'react';
import BtnCart from '../componets/BtnCart';

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
      </div>
    );
  }
}

export default Home;
