import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import ProductDetail from './components/ProductDetail'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Error from './components/Error'
import ProductList from './components/ProductList'
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path='/'>
            <ProductList />
          </Route>
          <Route path='/cart' >
            <Cart />
          </Route>
          <Route path='/detail'>
            <ProductDetail />
          </Route>
          <Route path='/*'>
            <Error />
          </Route>
        </Switch>
      </React.Fragment>
    )
  }
}

