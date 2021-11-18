import React from 'react';
import { getCategories } from '../services/api';

class Category extends React.Component {
  constructor() {
    super();
    this.state = {
      categoria: [],
    };
    this.getApi = this.getApi.bind(this);
  }

  componentDidMount() {
    this.getApi();
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
      <ul>
        {categoria.map((data) => (
          <li key={ data.id }>
            <label htmlFor={ data.name } data-testid="category">
              {data.name}
              <input
                type="radio"
                id={ data.name }
                name="categoria"
              />
            </label>
          </li>
        ))}
      </ul>
    );
  }
}

export default Category;
