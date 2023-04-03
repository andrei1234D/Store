import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import '../style/Nav.css';

export default function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <Link to="/" className="link">
          <li>Home</li>
        </Link>
        {localStorage.getItem('isLoggedIn') !== 'true' && (
          <Link to="/login" className="link">
            <li>Login</li>
          </Link>
        )}
        {localStorage.getItem('isLoggedIn') === 'true' && (
          <Link to="/search" className="link">
            <li>Search</li>
          </Link>
        )}
        {localStorage.getItem('isLoggedIn') === 'true' && (
          <Link to="/account" className="link">
            <li>Account</li>
          </Link>
        )}
      </ul>
      {localStorage.getItem('isLoggedIn') === 'true' && (
        <Link to="/cart" className="cartLink">
          <li>
            <AiOutlineShoppingCart size={50} />
          </li>
        </Link>
      )}
    </nav>
  );
}
