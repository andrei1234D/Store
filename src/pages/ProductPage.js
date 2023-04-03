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
  let id = Object.values(params);
  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://fakestoreapi.com/products/${id}`,
    }).then((res) => {
      setData(res.data);
    });
  }, []);

  let product = [
    {
      title: data.title,
      price: data.price,
      image: data.image,
    },
  ];
  localStorage.setItem('ActualProduct', JSON.stringify(product));

  const handleSubmit = (e) => {
    e.preventDefault();
    let productCart = JSON.parse(localStorage.getItem('CartItems')) || '[]';
    productCart.push(product);
    console.log(productCart);
    localStorage.setItem('CartItems', JSON.stringify(productCart));
    navigate('/cart');
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
        <div className="buyNow" onSubmit={handleSubmit}>
          <p>
            Buy Now<br></br>
            {data.price}USD
          </p>
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              width: '200px',
              height: '75px',
              backgroundColor: 'rgba(17, 94, 130)   ',
              fontSize: '18px',
              marginLeft: '30px',
            }}
          >
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
