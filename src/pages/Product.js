import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromId } from '../services/api';
import BtnCart from '../components/BtnCart';

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
      idProduct: '',
      productList: [],
      clicks: 1,
    };
  }

  componentDidMount() {
    this.getProduct();
  }

   handleClick = () => {
     const { idProduct } = this.state;
     this.setState((prevState) => (
       { productList: [...prevState.productList, idProduct] }), () => {
       const { productList } = this.state;
       localStorage.setItem('cartItems', JSON.stringify(productList));
       this.setState((prevState) => ({
         clicks: prevState.clicks + 1,
       }));
     });

     const { clicks } = this.state;
     localStorage.setItem('soma', JSON.stringify(clicks));
   }

  getProduct = () => {
    const { id } = this.state;
    getProductsFromId(id).then((data) => {
      this.setState({
        title: data.title,
        image: data.thumbnail,
        price: data.price,
        details: data.details,
        idProduct: data.id,
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
        <div>
          <span data-testid="product-detail-name">{ title }</span>
          <img src={ image } alt={ title } />
          <span>{ price }</span>
          <p>{ details }</p>
          <span>teste pagina</span>
        </div>

        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar ao carrinho

        </button>
        <BtnCart />
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
