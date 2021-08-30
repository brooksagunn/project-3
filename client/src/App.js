import React, { useState, useEffect } from 'react';
import Nav from './components/Nav/Nav';
import Login from './components/Login/Login';
import Accessories from './components/Accessories/Accessories'
import Bag from './components/Bag/Bag';
import Header from './components/Header/Header';
import Seasons from './components/Seasons/Seasons';
import Paragraph from './components/Paragraph/Paragraph';
import Checkout from './components/CheckoutForm/Checkout/Checkout'
import ProductGrid from './components/ProductGrid/ProductGrid';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>

            <Route exact path="/">
              <Header/>
              <Paragraph />
            </Route>

            <Route exact path="/seasons">
              <Seasons />
            </Route>

            <Route exact path="/bag">
              <Bag />
            </Route>

            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/checkout">
              <Checkout />
            </Route>

            <Route exact path="/products">
              <ProductGrid />
            </Route>

            <Route exact path="/accessories">
              <Accessories />
            </Route>

          </Switch>
        </div>
      </Router>
    );
}