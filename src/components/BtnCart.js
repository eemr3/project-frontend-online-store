import React from 'react';
import { Link } from 'react-router-dom';

class BtnCart extends React.Component {
  render() {
    return (
      <div>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <i className="fas fa-shopping-cart" />
        </Link>
      </div>
    );
  }
}

export default BtnCart;
