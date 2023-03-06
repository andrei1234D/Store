import '../style/ProductPage.css';
import { Button } from '@mui/material';

function ProductPage() {
  return (
    <div>
      <p className="title">Titlul Produsului</p>
      <div className="display">
        <img
          src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
          alt="#"
        />
        <div style={{ fontSize: '25px' }}>
          Rating:{}({}reviews)
          <br></br>
          <h1 style={{ color: 'rgba(17, 94, 130)' }}>price</h1> {}
        </div>
        <div className="buyNow">
          <p>
            Buy Now<br></br>price
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
