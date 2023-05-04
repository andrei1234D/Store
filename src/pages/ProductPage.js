import '../style/ProductPage.css';
import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ProductPage() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const params = useParams();
  let id = Object.values(params)[0]; // fix the id value extraction
  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://fakestoreapi.com/products/${id}`,
    }).then((res) => {
      setData(res.data);
    });
  }, [id]); // add id to the dependency list

  let product = {
    productId: Number(id),
    title: data.title,
    price: data.price,
    image: data.image,
    quantity: 1,
  };

  if (!data.title) {
    // change the condition to check if title is empty
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }

  localStorage.setItem('ActualProduct', JSON.stringify(product));
  let itemFound = false;
  const handleSubmit = (e) => {
    e.preventDefault();
    let productCart = JSON.parse(localStorage.getItem('CartItems')) || [];

    productCart.forEach((cartItem) => {
      if (cartItem.productId === product.productId) {
        cartItem.quantity = cartItem.quantity + 1;

        itemFound = true;
      }
    });
    if (!itemFound) {
      productCart.push(product);
    }

    localStorage.setItem('CartItems', JSON.stringify(productCart));

    navigate('/Search');
  };

  return (
    <div>
      <p className="title">{data.title}</p>
      <div className="display">
        <Link to={`${data.image}`}>
          <img src={data.image} className="image" alt="#" />
        </Link>
        <div style={{ fontSize: '25px', marginLeft: '5%' }}>
          Rating:{data?.rating?.rate}({data?.rating?.count}reviews)
          <br></br>
          <h1>Price:{data.price}USD</h1>
        </div>
        <div className="buyNow">
          <form onSubmit={handleSubmit}>
            {' '}
            {/* wrap the div with form tag */}
            <div
              id="bottomBuyNowDiv"
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <div
                id="buyNowPrice"
                style={{
                  color: 'var(  --text_color: #353535)',
                }}
              >
                {data.price}
                <br></br>USD
              </div>
              <Button
                type="submit" // add type attribute with value submit
                variant="contained"
                sx={{
                  ':hover': {
                    bgcolor: 'var(--button_hover)',
                    color: 'var(--button_hover_text)',
                  },
                  width: '200px',
                  height: '75px',
                  backgroundColor: 'var(--button_background_color)   ',
                  fontSize: '18px',
                  fontFamily: 'Zen Dots',
                  marginLeft: '2%',
                }}
              >
                Add To Cart
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
