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
        {localStorage.getItem('isLoggedIn') === 'false' && (
          <Link to="/Login" className="link">
            <li>Login</li>
          </Link>
        )}
        {localStorage.getItem('isLoggedIn') === 'true' && (
          <Link to="/Search" className="link">
            <li>Search</li>
          </Link>
        )}
        {localStorage.getItem('isLoggedIn') === 'true' && (
          <Link to="/Account" className="link">
            <li>Account</li>
          </Link>
        )}
      </ul>
    </nav>
  );
}
