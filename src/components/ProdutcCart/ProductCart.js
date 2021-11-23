import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonAdd from '../ButtonAdd/ButtonAdd';

class ProductCart extends Component {
  render() {
    const { product } = this.props;
    return (
      <div
        data-testid="product"
        className="card-product"
      >
        <Link
          to={ `/product/${product.id}` }
          data-testid="product-detail-link"
        >
          <img src={ product.thumbnail } alt={ product.title } />
          <span>
            {product.title}
            {' '}
          </span>
          <span>
            {`R$:${product.price}`}
            {' '}
          </span>
        </Link>
        <ButtonAdd product={ product } />
      </div>
    );
  }
}

ProductCart.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ProductCart;
