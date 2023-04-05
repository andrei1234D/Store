import '../style/Search.css';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//Axios
import axios from 'axios';

function Search() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://fakestoreapi.com/products',
    }).then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div>
      <div className="centerSearch">
        <TextField
          id="filled-error-helper-text"
          label="Search..."
          variant="filled"
          color="secondary"
          size="small"
        />
      </div>
      <div className="centerSearch">
        <Button
          variant="contained"
          type="submit"
          sx={{
            width: '100px',
            backgroundColor: '#2FA4FF',
            fontSize: 'small',
          }}
        >
          Search
        </Button>
      </div>
      <div className="productContainer">
        {data.length !== 0 ? (
          data.map((product) => (
            <div key={product.id} className="card">
              <div>
                <Link to={`/product/${product.id}`}>
                  <img src={product.image} className="images" alt="#" />
                </Link>
              </div>
              <p>
                {product.title}
                <br></br>
                <div style={{ color: 'red' }}>{product.price} USD</div>
              </p>
            </div>
          ))
        ) : (
          <p
            style={{
              fontSize: '50px',
            }}
          >
            Loading...
          </p>
        )}
      </div>
    </div>
  );
}

export default Search;
