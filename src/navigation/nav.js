import React from 'react';
import { Link } from 'react-router-dom';

import '../style/Nav.css';

export default function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <Link to="/Home" className="link">
          <li>Home</li>
        </Link>
        <Link to="/Login" className="link">
          <li>Login</li>
        </Link>
        <Link to="/Search" className="link">
          <li>Search</li>
        </Link>
      </ul>
    </nav>
  );
}
