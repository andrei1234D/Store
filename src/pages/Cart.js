import '../style/Cart.css';

function Cart() {
  let product = JSON.parse(localStorage.getItem('CartItems'));
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Your Products</h1>
      <div className="cart">
        <div style={{ padding: '1%' }}>
          <div
            style={{
              marginRight: '1%',
              marginLeft: '1%',
              borderStyle: 'solid',
              borderColor: 'black',
            }}
          >
            {product.map((item) => (
              <div
                id="productContainer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <div style={{ marginRight: '5%', marginLeft: '2%' }}>
                  <img src={item.image} alt="#" width="90px" height="90px" />
                </div>
                <div style={{ marginRight: '5%', marginLeft: '5%' }}>
                  {item.title}
                </div>
                <div style={{ marginRight: '5%', marginLeft: '20%' }}>
                  {item.price} USD
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
