import '../style/Cart.css';

function Cart() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Your Products</h1>
      <div className="cart">
        <div style={{ padding: '1%' }}>
          <div
            style={{
              marginRight: '1%',
              marginLeft: '1%',
              display: 'flex',
              alignItems: 'center',
              borderStyle: 'solid',
              borderColor: 'black',
            }}
          >
            <div style={{ marginRight: '5%', marginLeft: '2%' }}>
              <img
                src={localStorage.getItem('ProductImage')}
                alt="#"
                width="90px"
                height="90px"
              />
            </div>
            <div style={{ marginRight: '5%', marginLeft: '5%' }}>
              {localStorage.getItem('ProductName')}
            </div>
            <div style={{ marginRight: '5%', marginLeft: '20%' }}>
              {localStorage.getItem('ProductPrice')}$
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
