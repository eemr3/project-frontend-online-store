import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductQuantity extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     products: [],
  //     quantity: 0,
  //   };
  // }

  // componentDidMount() {
  //   this.getFromLocalStorage();
  // }

  render() {
    const { quantity } = this.props;
    return (
      <div>
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
      </div>
    );
  }
}

ProductQuantity.propTypes = {
  quantity: PropTypes.number,
};

ProductQuantity.defaultProps = {
  quantity: 0,
};

export default ProductQuantity;
