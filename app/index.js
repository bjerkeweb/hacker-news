import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect
} from 'react-router-dom';

import Posts from './components/Posts';
import Post from './components/Post';
import Nav from './components/Nav';
import User from './components/User';

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
          <Route path="/user/:id" component={ User } />
          <Redirect from="/user" to="/" />
          <Route path="/post/:id" component={ Post } />
          <Redirect from="/post" to="/" />
          <Route render={() => <h1>404</h1>} />
        </Switch>
      </div>
    </Router>
  )
}

ReactDom.render( <App />, document.getElementById('root') );