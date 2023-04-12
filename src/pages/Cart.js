import '../style/Cart.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ImBin } from 'react-icons/im';
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

  const handleRemoveSubmit = (id) => {
    products = products.filter((itemToRemove) => itemToRemove.productId !== id);
    localStorage.setItem('CartItems', JSON.stringify(products));

    navigate('/cart');
  };

  const handleAddSubmit = (id) => {
    products.forEach((item) => {
      if (id === item.productId) item.quantity = item.quantity + 1;
    });

    localStorage.setItem('CartItems', JSON.stringify(products));

    navigate('/cart');
  };
  const handleSubtractSubmit = (id) => {
    products.forEach((item) => {
      if (id === item.productId && item.quantity === 1) {
        products = products.filter(
          (itemToRemove) => itemToRemove.productId !== id
        );
        localStorage.setItem('CartItems', JSON.stringify(products));
      } else if (id === item.productId) item.quantity = item.quantity - 1;
    });

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
                  borderTop: 'none',
                  borderLeft: 'none',
                  borderRight: 'none',
                  marginBottom: '1%',
                  backgroundColor: 'white',
                }}
              >
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
                    style={{ color: 'var(--button_background_color)' }}
                    onClick={() => handleSubtractSubmit(item.productId)}
                  />
                  <div className="quantity">
                    <pre style={{ fontSize: '20px' }}> {item.quantity} </pre>
                  </div>
                  <AiFillPlusSquare
                    size="20px"
                    style={{ color: 'var(--button_background_color)' }}
                    className="quantityChange"
                    onClick={() => handleAddSubmit(item.productId)}
                  />
                </div>
                <div style={{ width: '10%', textAlign: 'center' }}>
                  {(item.price * item.quantity).toFixed(2)}
                  <br></br> USD
                </div>

                <ImBin
                  size={30}
                  className="removeButton"
                  onClick={() => handleRemoveSubmit(item.productId)}
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
            marginLeft: '60% ',
          }}
        >
          <div
            id="productContainer"
            style={{
              display: 'flex',
              alignItems: 'center',
              borderTop: 'none',
              borderLeft: 'none',
              borderRight: 'none',
              marginBottom: '1%',
              backgroundColor: 'white',
            }}
          ></div>
          <pre
            style={{
              ':hover': {
                bgcolor: 'var(--button_hover)',
                color: 'var(--button_hover_text)',
              },
              fontSize: '25px',
              display: 'flex',
              justifyContent: 'left',
              fontFamily: 'Zen Dots',
            }}
          >
            Total: {moneyYouNeedToPay.toFixed(2)}
            <div
              style={{
                fontSize: '20px',
                marginTop: 'auto',
              }}
            >
              USD
            </div>
          </pre>
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              ':hover': {
                bgcolor: 'var(--button_hover)',
                color: 'var(--button_hover_text)',
              },
              width: '150px',
              height: '50px',
              backgroundColor: 'var(--button_background_color)',
              fontSize: '18px',
            }}
          >
            Buy Now
          </Button>
        </div>
        <div id="removeAllDiv">
          <button onClick={handleRemoveAllSubmit} className="clearAllBin">
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
