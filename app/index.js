import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

import Posts from './components/Posts';

function App() {
  return (
    <div className="container">
      <Posts type="top" />
    </div>
  )
}

ReactDom.render( <App />, document.getElementById('root') );