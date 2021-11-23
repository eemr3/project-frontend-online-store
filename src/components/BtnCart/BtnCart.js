import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
          <span
            data-testid="shopping-cart-size"
            style={ {
              display: 'inline-block',
              marginLeft: '2px',
              border: '1px solid black',
              borderRadius: '50%',
              height: '20px',
              width: '20px',
              textAlign: 'center',
            } }
          >
            {quantity}
          </span>
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
