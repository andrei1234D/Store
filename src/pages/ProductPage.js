import '../style/ProductPage.css';
import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
function ProductPage() {
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
  return (
    <div>
      <p className="title">{data.title}</p>
      <div className="display">
        <img src={data.image} className="image" alt="#" />
        <div style={{ fontSize: '25px' }}>
          Rating:{data?.rating?.rate}({data?.rating?.count}reviews)
          <br></br>
          <h1 style={{ color: 'rgba(17, 94, 130)' }}>Price</h1> {data.price}USD
        </div>
        <div className="buyNow">
          <p>
            Buy Now<br></br>
            {data.price}USD
          </p>
          <Button
            variant="contained"
            type="submit"
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
