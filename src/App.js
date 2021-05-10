import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './scenes/login/Login'


function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path='/login' component={Login} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
