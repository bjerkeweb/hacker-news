import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="header-main">
      <ul className="main-nav">
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