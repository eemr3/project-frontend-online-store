import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../../services/api';

import './Category.css';

class Category extends React.Component {
  constructor() {
    super();
    this.state = {
      categoria: [],
      radioValue: '',
    };
    this.getApi = this.getApi.bind(this);
  }

  componentDidMount() {
    this.getApi();
  }

  handleChangeCategory = ({ target }) => {
    const valueCategory = target.value;
    const { getProduct } = this.props;
    this.setState({ radioValue: valueCategory }, () => {
      const { radioValue } = this.state;
      getProduct(radioValue, '');
    });
  }

  getApi() {
    getCategories()
      .then((response) => this.setState({
        categoria: response,
      }));
  }

  render() {
    const { categoria } = this.state;
    return (
      <div className="container-category">
        <ul>
          {categoria.map((data) => (
            <li key={ data.id }>
              <label htmlFor={ data.name } data-testid="category">
                {data.name}
                <input
                  type="radio"
                  id={ data.name }
                  name="categoria"
                  value={ data.id }
                  onChange={ this.handleChangeCategory }
                />
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Category.propTypes = {
  getProduct: PropTypes.func,
};

Category.defaultProps = {
  getProduct: () => {},
};

export default Category;
