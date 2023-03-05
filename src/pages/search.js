import '../style/Search.css';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import React, { useState, useEffect } from 'react';
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
      {console.log(data)}
      <div className="centerSearch">
        <TextField
          id="filled-error-helper-text"
          label="Search field"
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
      {data.length !== 0 ? (
        data.forEach((product) => {
          <div key={product.id} className="card">
            <div img src={product.image} alt="#"></div>
          </div>;
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Search;
