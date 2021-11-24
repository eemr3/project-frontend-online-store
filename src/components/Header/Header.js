import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { handleChange, value, onClick } = this.props;
    return (
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
              onChange={ handleChange }
            />
          </label>
          <button
            type="button"
            onClick={ onClick }
            data-testid="query-button"
          >
            Buscar
          </button>
        </div>

      </header>
    );
  }
}

Header.propTypes = {
  handleChange: PropTypes.func,
  onClick: PropTypes.func,
  value: PropTypes.string,
  // quantity: PropTypes.number,
};

Header.defaultProps = {
  handleChange: () => {},
  onClick: () => {},
  value: '',
  // quantity: 0,
};
export default Header;
