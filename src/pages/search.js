import '../style/Search.css';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//Axios
import axios from 'axios';

function Search() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState();

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
            ':hover': {
              bgcolor: 'var(--button_hover)',
              color: 'var(--button_hover_text)',
            },
            width: '100px',
            backgroundColor: 'var(--button_background_color)',
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
                <div style={{ color: 'var(  --text_color: #353535)' }}>
                  {product.price} USD
                </div>
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
