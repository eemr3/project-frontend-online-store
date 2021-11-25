import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonAdd from '../ButtonAdd/ButtonAdd';

class ProductCart extends Component {
  constructor() {
    super();
    this.state = {
      freeShipping: false,
    };
  }

  componentDidMount() {
    this.freeShippingProduct();
  }

  freeShippingProduct = () => {
    const { product: { shipping } } = this.props;
    this.setState(({
      freeShipping: shipping.free_shipping,
    }));
  }

  render() {
    const { freeShipping } = this.state;
    const { product, getFromLocalStorageQunatityProduct } = this.props;
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
          {freeShipping
          && (
            <span
              style={ { color: 'red', fontSize: '18px' } }
              data-testid="free-shipping"
            >
              Frete Grátis!

            </span>
          )}
        </Link>
        <ButtonAdd
          product={ product }
          dataTestId="product-add-to-cart"
          getFromLocalStorageQunatityProduct={ getFromLocalStorageQunatityProduct }
        />
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
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }),
  }).isRequired,
  getFromLocalStorageQunatityProduct: PropTypes.func,
};

ProductCart.defaultProps = {
  getFromLocalStorageQunatityProduct: () => {},
};

export default ProductCart;
