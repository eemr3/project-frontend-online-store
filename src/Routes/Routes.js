import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import ShoppingCart from '../pages/ShoppingCart';
import Product from '../pages/Product';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/shopping-cart" component={ ShoppingCart } />
        <Route exact path="/product/:id" component={ Product } />
      </Switch>
    );
  }
}

export default Routes;
