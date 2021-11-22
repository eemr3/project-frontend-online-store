import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class BtnCart extends React.Component {
  render() {
    const { className } = this.props;
    return (
      <div>
        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
          className={ className }
        >
          <i className="fas fa-shopping-cart" />
        </Link>
      </div>
    );
  }
}

BtnCart.propTypes = {
  className: PropTypes.string,
};

BtnCart.defaultProps = {
  className: '',
};
export default BtnCart;
