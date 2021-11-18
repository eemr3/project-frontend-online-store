import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
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
