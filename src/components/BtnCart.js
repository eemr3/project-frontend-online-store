import React from 'react';
import { Link } from 'react-router-dom';

class BtnCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sum: 0,
    };
    this.getSoma = this.getSoma.bind(this);
  }

  componentDidMount() {
    this.getSoma();
  }

  getSoma() {
    const soma = JSON.parse(localStorage.getItem('soma'));
    this.setState((prevState) => ({
      sum: prevState.sum + soma,
    }));
  }

  render() {
    const { sum } = this.state;
    return (
      <div>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <i className="fas fa-shopping-cart" />
          <div data-testid="shopping-cart-product-quantity">{ sum }</div>
        </Link>
      </div>
    );
  }
}

export default BtnCart;
