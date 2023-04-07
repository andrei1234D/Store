import '../style/Cart.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ImBin2 } from 'react-icons/im';
import { AiFillPlusSquare, AiFillMinusSquare } from 'react-icons/ai';

function Cart() {
  const navigate = useNavigate();

  let products = JSON.parse(localStorage.getItem('CartItems'));
  let moneyYouNeedToPay = 0;
  if (!products || products?.length === 0) {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ textAlign: 'center' }}>Your Products</h1>
        <div className="cart">
          <h1>No products added yet</h1>
          <h1>Go to Search to begin shopping</h1>
        </div>
      </div>
    );
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate('/payment');
  };

  const handleRemoveSubmit = (e) => {
    e.preventDefault();
    products.splice(0, 1);
    localStorage.setItem('CartItems', JSON.stringify(products));

    navigate('/cart');
  };
  const handleRemoveAllSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem('CartItems', '[]');
    navigate('/cart');
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Your Products</h1>
      <div className="cart">
        <div style={{ padding: '1%' }}>
          <div
            style={{
              marginRight: '1%',
              marginLeft: '1%',
            }}
          >
            {products?.map((item) => (
              <div
                id="productContainer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  borderStyle: 'solid',
                  borderColor: 'black',
                  marginBottom: '1%',
                }}
              >
                {console.log(item)}
                <div
                  style={{
                    marginRight: '2%',
                    marginLeft: '1%',
                    width: '10%',
                    padding: '1%',
                  }}
                >
                  <Link to={`/product/${item.productId}`}>
                    <img src={item.image} alt="#" width="90px" height="90px" />
                  </Link>
                </div>
                <div style={{ marginLeft: '1%', width: '60%' }}>
                  {item.title}
                </div>
                <div
                  id="quantityDiv"
                  style={{
                    width: '10%',
                    textAlign: 'center',
                  }}
                >
                  <AiFillMinusSquare
                    size="20px"
                    className="quantityChange"
                    style={{ color: 'red' }}
                  />
                  <div className="quantity">{item.quantity}</div>
                  <AiFillPlusSquare
                    size="20px"
                    style={{ color: 'green' }}
                    className="quantityChange"
                  />
                </div>
                <div style={{ width: '10%', textAlign: 'center' }}>
                  {(item.price * item.quantity).toFixed(2)}
                  <br></br> USD
                </div>

                <ImBin2
                  size={30}
                  className="removeButton"
                  onClick={handleRemoveSubmit}
                />
              </div>
            ))}
          </div>
        </div>
        {products.forEach(
          (item) =>
            (moneyYouNeedToPay = moneyYouNeedToPay + item.price * item.quantity)
        )}
        <div
          id="buyNowDiv"
          style={{
            padding: '1%',
            marginLeft: '70% ',
          }}
        >
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              width: '150px',
              height: '50px',
              backgroundColor: 'rgba(17, 94, 130)   ',
              fontSize: '18px',
            }}
          >
            Buy Now
          </Button>
          <p
            style={{
              fontSize: '3vh',
              display: 'flex',
              justifyContent: 'left',
              color: 'red',
            }}
          >
            {moneyYouNeedToPay.toFixed(2)}USD
          </p>
        </div>
        <div id="removeAllDiv">
          <p onClick={handleRemoveAllSubmit} className="clearAllBin">
            Clear All
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
