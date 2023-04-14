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
  const tracks = data;

  const items = tracks;
  const getFilteredItems = (query, items) => {
    if (!query.toLowerCase()) {
      return items;
    }
    return items.filter((song) =>
      song.title.toLowerCase().includes(query.toLowerCase())
    );
  };
  const [query, setQuery] = useState('');
  const filteredItems = getFilteredItems(query, items);
  return (
    <div>
      <div className="centerSearch">
        <TextField
          id="filled-error-helper-text"
          label="Search..."
          variant="filled"
          color="secondary"
          size="small"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="productContainer">
        {filteredItems.length !== 0 ? (
          filteredItems?.map((product) => (
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
          <pre
            style={{
              fontSize: '50px',
              alignItems: 'center',
            }}
          >
            No Products Found
          </pre>
        )}
      </div>
    </div>
  );
}

export default Search;
