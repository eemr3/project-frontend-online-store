import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsFromId } from '../../services/api';
import BtnCart from '../../components/BtnCart/BtnCart';
import ButtonAdd from '../../components/ButtonAdd/ButtonAdd';
import Form from '../../components/Form/Form';
import Evaluation from '../../components/Evaluation/Evaluation';

import './Product.css';

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
      thumbnail: '',
      price: 0,
      emailCard: '',
      comentCard: '',
      formInfo: [],
      isSaveButtonDisabled: true,
      selectTYpe: '',
      comentsSave: [],
      quantity: 0,
      shipping: false,
    };

    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.onInputCHange = this.onInputCHange.bind(this);
    this.infoInputs = this.infoInputs.bind(this);
  }

  componentDidMount() {
    this.getProduct();
    this.getFromLocalStorageQunatityProduct();
  }

  onSaveButtonClick(event) {
    const { formInfo } = this.state;
    const { infoInputs } = this;
    event.preventDefault();
    this.setState((prevState) => ({ formInfo: [...formInfo, infoInputs(prevState)] }));
    const { comentCard, emailCard, selectTYpe, id, comentsSave } = this.state;
    const listSave = ({ comentCard, emailCard, selectTYpe, id });
    this.setState((prevState) => ({
      comentsSave: [...prevState.comentsSave, listSave] }));
    localStorage.setItem('evaluationsList', JSON.stringify(comentsSave));
  }

  onInputCHange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value }, () => {
      this.setState({ isSaveButtonDisabled: this.validationButton() });
    });
  }

  getProduct = () => {
    const { id } = this.state;
    getProductsFromId(id).then((data) => {
      this.setState({
        title: data.title,
        thumbnail: data.thumbnail,
        price: data.price,
        shipping: data.shipping.free_shipping,
      });
    });
  }

  getFromLocalStorageQunatityProduct = () => {
    if (localStorage.getItem('cartItems') === null) {
      return localStorage.setItem('cartItems', JSON.stringify([]));
    }
    const itemsList = JSON.parse(localStorage.getItem('cartItems'));
    this.setState(({
      products: itemsList,
    }), () => {
      const { products } = this.state;
      this.setState({ quantity: products
        .reduce((acc, current) => parseFloat(acc) + parseFloat(current.quantity), 0) });
    });
  }

  infoInputs(prevState) {
    this.setState({
      emailCard: '',
      comentCard: '',
      selectTYpe: '',
    });
    return {
      emailCard: prevState.emailCard,
      comentCard: prevState.comentCard,
      selectTYpe: prevState.selectTYpe,
    };
  }

  validationButton() {
    const { emailCard } = this.state;
    if (emailCard === '') {
      return true;
    }
  }

  render() {
    const {
      state: {
        id,
        title,
        thumbnail,
        price,
        emailCard,
        comentCard,
        formInfo,
        isSaveButtonDisabled,
        selectTYpe,
        quantity,
        shipping,
      }, onSaveButtonClick, onInputCHange,
    } = this;
    const resultProduct = { title, thumbnail, price, id };

    return (
      <section className="product-container">
        <div>
          <Link to="/">
            <i className="fas fa-home" />
          </Link>
          <BtnCart
            classNameDiv="container-btnCart-product-screen"
            quantity={ quantity }
          />
          <div className="product-content">
            <img src={ thumbnail } alt={ title } />
            <h4 data-testid="product-detail-name">{ title }</h4>
            <span className="product-content__price">{ price }</span>
            {shipping && (
              <span className="product-content__frete">
                <i className="fas fa-box-open" />
                Frete Grátis
              </span>)}
            <ButtonAdd
              product={ resultProduct }
              dataTestId="product-detail-add-to-cart"
              getFromLocalStorageQunatityProduct={
                this.getFromLocalStorageQunatityProduct
              }
            />
          </div>
        </div>

        <div className="product-form-container">
          <Form
            comentCard={ comentCard }
            emailInput={ emailCard }
            onInputCHange={ onInputCHange }
            onSaveButtonClick={ onSaveButtonClick }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            formInfo={ formInfo }
            selectTYpe={ selectTYpe }
          />
        </div>
        <div>
          {formInfo.map((form, index) => (
            <Evaluation
              comentCard={ form.comentCard }
              emailInput={ form.emailCard }
              selectTYpe={ form.selectTYpe }
              key={ index }
            />
          ))}
        </div>
      </section>
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
