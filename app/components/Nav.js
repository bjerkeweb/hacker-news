import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="header-main">
      <ul className="main-nav">
        <Link to="/"><li className="logo"></li></Link>
        <li>
          <NavLink exact to='/' className="nav-link" activeClassName="active">Top</NavLink>
        </li>
        <li>
          <NavLink exact to='/new' className="nav-link" activeClassName="active">New</NavLink>
        </li>
      </ul>
    </div>
  )
}