import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store, persistor } from './redux/store'
import HomePage from './scenes/HomePage'
import SearchPage from './scenes/SearchPage';
import LoginPage from './scenes/LoginPage'
import ProductPage from './scenes/ProductPage'
import Shop from './scenes/Shop';
import { PersistGate } from 'redux-persist/integration/react'
import './App.css'


// TODO: Backend needs route for new items
// 


function App() {
  return (
    <React.Fragment>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/home' component={HomePage} />
              <Route exact path='/login' component={LoginPage} />
              <Route exact path='/shop' component={Shop} />
              <Route exact path='/search' component={SearchPage} />
              <Route path="/shop/product/:id" component={ProductPage} />
              <Route path="/shop/:category" component={Shop} />
              <Route path="/shop/new" component={ProductPage} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </React.Fragment>
  );
}

export default App;
