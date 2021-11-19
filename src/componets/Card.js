import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { productArray } = this.props;
    return (
      productArray.map((product) => (
        <div key={ product.id } data-testid="product">
          <span>
            {product.name}
            {' '}
          </span>
          <img src={ product.thumbnail } alt={ product.name } />
          <span>
            {`R$:${product.price}`}
            {' '}
          </span>
        </div>
      ))
    );
  }
}

Card.propTypes = {
  productArray: PropTypes
    .arrayOf(PropTypes.shape({ name: PropTypes.string })).isRequired,
};
export default Card;
