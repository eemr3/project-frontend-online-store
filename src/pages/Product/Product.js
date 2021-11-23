import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromId } from '../../services/api';
import BtnCart from '../../components/BtnCart/BtnCart';
import ButtonAdd from '../../components/ButtonAdd/ButtonAdd';
import Form from '../../components/Form/Form';
import Evaluation from '../../components/Evaluation/Evaluation';

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
      price: '',
      details: '',
      emailCard: '',
      comentCard: '',
      formInfo: [],
      isSaveButtonDisabled: true,
      selectTYpe: '',
      comentsSave: [],
    };

    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.onInputCHange = this.onInputCHange.bind(this);
    this.infoInputs = this.infoInputs.bind(this);
  }

  componentDidMount() {
    this.getProduct();
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
        details: data.details,
      });
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
        details,
        emailCard,
        comentCard,
        formInfo,
        isSaveButtonDisabled,
        selectTYpe,
      }, onSaveButtonClick, onInputCHange,
    } = this;
    const resultProduct = { title, thumbnail, price, id };
    return (
      <section>
        <div>
          <BtnCart />
          <div>
            <span data-testid="product-detail-name">{ title }</span>
            <img src={ thumbnail } alt={ title } />
            <span>{ price }</span>
            <p>{ details }</p>
            <span>teste pagina</span>
          </div>
          <ButtonAdd product={ resultProduct } dataTestId="product-detail-add-to-cart" />
        </div>

        <div>
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
