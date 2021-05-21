import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store, persistor } from './store'
import Home from './scenes/home/Home'
import Search from './scenes/search/Search'
import Login from './scenes/Login'
import ProductPage from './scenes/ProductPage'
import { PersistGate } from 'redux-persist/integration/react'
import './App.css'



function App() {
  return (
    <React.Fragment>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Switch>
              <Route exact path='/home' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/catalog/search' component={Search} />
              <Route path="/catalog/product/:id" component={ProductPage} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </React.Fragment>
  );
}

export default App;
