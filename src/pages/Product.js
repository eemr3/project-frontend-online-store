import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromId } from '../services/api';

class Product extends React.Component {
  constructor(props) {
    super(props);
    const {
      match: {
        params: { id },
      },
    } = this.props;

    this.state = {
      id,
      title: '',
      image: '',
      price: '',
      details: '',
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct = () => {
    const { id } = this.state;
    getProductsFromId(id).then((data) => {
      this.setState({
        title: data.title,
        image: data.thumbnail,
        price: data.price,
        details: data.details,
      });
    });
  }

  render() {
    const {
      title,
      image,
      price,
      details,
    } = this.state;

    return (
      <div>
        <span data-testid="product-detail-name">{ title }</span>
        <img src={ image } alt={ title } />
        <span>{ price }</span>
        <p>{ details }</p>
        <span>teste pagina</span>
      </div>
    );
  }
}

Product.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Product;
