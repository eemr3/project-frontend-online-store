import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

import './Card.css';
import ProductCart from '../ProdutcCart/ProductCart';

class Card extends Component {
  render() {
    const { productArray } = this.props;
    return (
      productArray.map((product) => (
        <ProductCart
          key={ product.id }
          product={ product }
          productArray={ productArray }
        />

      ))
    );
  }
}

Card.propTypes = {
  productArray: PropTypes
    .arrayOf(PropTypes.shape({ name: PropTypes.string })).isRequired,
};
export default Card;
