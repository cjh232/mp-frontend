import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './scenes/login/Login'
import Home from './scenes/home/Home'
import Search from './scenes/search/Search'

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/search' component={Search} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
