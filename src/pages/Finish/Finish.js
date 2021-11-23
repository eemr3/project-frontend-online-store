import React from 'react';

class Finish extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      totalPrices: 0,
    };
  }

  componentDidMount() {
    this.RecuperaProdutos();
  }

  RecuperaProdutos = () => {
    if (localStorage.getItem('cartItems') === null) {
      return localStorage.setItem('cartItems', JSON.stringify([]));
    }
    const itemsList = JSON.parse(localStorage.getItem('cartItems'));
    this.setState(({
      products: itemsList,
    }), () => {
      const { products } = this.state;
      this.setState({
        totalPrices: products
          .reduce((acc, current) => parseFloat(acc) + parseFloat(current.price), 0),
      });
    });
  }

  render() {
    const { products, totalPrices } = this.state;
    return (

      <section>
        <div>
          <p>Revise seus Produtos</p>
          {products.map((product) => (
            <div key={ product.id }>
              <img src={ product.thumbnail } alt={ product.title } />
              <p>{`${product.title}  R$:${product.price} `}</p>
            </div>
          ))}
          <p>{`Total:${totalPrices}`}</p>

        </div>
        <form>
          <div>
            <p>informações do Comprador</p>
            <label htmlFor="fullName">
              Nome completo
              <input
                isRequired
                data-testid="checkout-fullname"
                type="text"
                name="fullName"
                id="fullName"
              />
            </label>
            <label htmlFor="email">
              Email
              <input
                isRequired
                data-testid="checkout-email"
                type="text"
                name="email"
                id="email"
              />
            </label>
            <label htmlFor="cpf">
              CPF
              <input
                isRequired
                data-testid="checkout-cpf"
                type="text"
                name="cpf"
                id="cpf"
              />
            </label>
            Telefone
            <label htmlFor="telefone">
              <input
                isRequired
                data-testid="checkout-phone"
                type="text"
                name="telefone"
                id="telefone"
              />
            </label>
            <label htmlFor="cep">
              cep
              <input
                isRequired
                data-testid="checkout-cep"
                type="text"
                name="cep"
                id="cep"
              />
            </label>
            <label htmlFor="endereco">
              Endereço
              <input
                isRequired
                data-testid="checkout-address"
                type="text"
                name="endereco"
                id="endereco"
              />
            </label>
          </div>
          <div>
            <h1>Métodos de Pagamentos</h1>
            <label htmlFor="boleto">
              Boleto
              <input type="radio" name="pagamento" id="boleto" />
            </label>
            <label htmlFor="visa">
              Cartão de credito
              Visa
              <input type="radio" name="pagamento" id="visa" value="visa" />
            </label>
            <label htmlFor="masterCard">
              MasterCard
              <input type="radio" name="pagamento" id="masterCard" value="masterCard" />
            </label>
            <label htmlFor="elo">
              Elo
              <input type="radio" name="pagamento" id="elo" value="elo" />
            </label>
          </div>
          <label htmlFor="button">
            <input
              type="button"
              data-testid="checkout-products"
              value="Comprar"
              id="button"
            />
          </label>
        </form>
      </section>);
  }
}

export default Finish;
