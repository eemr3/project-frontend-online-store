import React, { Component } from 'react';

class Card extends Component {

  render() {
    const { productArray } = this.props;
    return (
      productArray.map((product) => (
        <div key={product.id} data-testid="product">
          <span>{product.name} </span>
          <img src={product.thumbnail} alt={product.name} />
          <span>{`R$:${product.price}`} </span>
        </div>
      ))
    )
  }
}

export default Card;
