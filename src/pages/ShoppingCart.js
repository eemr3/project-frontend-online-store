import React from 'react';
import BtnCart from '../componets/BtnCart';

class ShoppingCart extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      emptyCart: true,
    };
  }

  render() {
    const { emptyCart } = this.state;
    return (
      <>
        <BtnCart />
        {emptyCart && (
          <span
            data-testid="shopping-cart-empty-message"
          >
            Seu carrinho está vazio
          </span>)}
      </>
    );
  }
}

export default ShoppingCart;
