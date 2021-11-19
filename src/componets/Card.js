import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends Component {
  render() {
    const { productArray } = this.props;
    return (
      productArray.map((product) => (
        <Link
          to={ `/product/${product.id}` }
          data-testid="product-detail-link"
          key={ product.id }
        >
          <div>
            <span>
              {product.title}
              {' '}
            </span>
            <img src={ product.thumbnail } alt={ product.title } />
            <span>
              {`R$:${product.price}`}
              {' '}
            </span>
          </div>
        </Link>
      ))
    );
  }
}

Card.propTypes = {
  productArray: PropTypes
    .arrayOf(PropTypes.shape({ name: PropTypes.string })).isRequired,
};
export default Card;
