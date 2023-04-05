import '../style/Cart.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
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
                <div
                  style={{
                    marginRight: '2%',
                    marginLeft: '1%',
                    width: '9%',
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
                <div style={{ width: '10%' }}>x{item.quantity}</div>
                <div>{(item.price * item.quantity).toFixed(2)} USD</div>
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
            marginLeft: '70%',
            padding: '1%',
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
              fontSize: '4VH',
              display: 'flex',
              justifyContent: 'left',
              color: 'red',
            }}
          >
            {moneyYouNeedToPay.toFixed(2)}USD
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
