import React, { Component } from 'react';
import Error from './components/error/Error';
import TodoInfo from './pages/single-todo/TodoEdit';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch >
          <Route exact path='/' component={Home} />
          <Route exact path='/todo/:id' component={TodoInfo} />
          <Route exact path='*' component={Error} />
        </Switch>
      </Router>
    );
  }
}

export default App;
