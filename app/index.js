import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom';

import Posts from './components/Posts';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <Nav />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Posts type="top" />
          </Route>
          <Route path="/new">
            <Posts type="new" />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

ReactDom.render( <App />, document.getElementById('root') );