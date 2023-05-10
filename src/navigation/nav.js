import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import '../style/Nav.css';

export default function Nav() {
  let cartProducts = JSON.parse(localStorage.getItem('CartItems'));
  function quantity(array) {
    let quantity = 0;
    array.forEach((element) => {
      quantity = quantity + element.quantity;
    });
    return quantity;
  }
  return (
    <nav>
      <ul className="nav-links">
        <Link to="/" className="link">
          <li>Home</li>
        </Link>
        <Link to="/search" className="link">
          <li>Search</li>
        </Link>
        {localStorage.getItem('isLoggedIn') !== 'true' && (
          <Link to="/login" className="link">
            <li>Login</li>
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
            <div style={{ display: 'flex', margin: '0 auto' }}>
              {cartProducts.length >= 1 && (
                <div
                  style={{
                    marginTop: 'auto',
                    color: 'red',
                    borderStyle: 'solid',
                    borderRadius: '30px',
                    padding: '10%',
                    borderColor: 'white',
                  }}
                >
                  {quantity(cartProducts)}
                </div>
              )}
              <div>
                <AiOutlineShoppingCart size={50} />
              </div>
            </div>
          </li>
        </Link>
      )}
    </nav>
  );
}
