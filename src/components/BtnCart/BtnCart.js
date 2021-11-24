import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductQuantity from '../ProductQuantity/ProductQuantity';

class BtnCart extends React.Component {
  render() {
    const { className, classNameDiv, quantity } = this.props;
    return (
      <div className={ classNameDiv }>
        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
          className={ className }
        >
          <i className="fas fa-shopping-cart" />
          <ProductQuantity
            quantity={ quantity }
          />
        </Link>
      </div>
    );
  }
}

BtnCart.propTypes = {
  className: PropTypes.string,
  classNameDiv: PropTypes.string,
  quantity: PropTypes.number,
};

BtnCart.defaultProps = {
  className: '',
  classNameDiv: '',
  quantity: 0,
};
export default BtnCart;
