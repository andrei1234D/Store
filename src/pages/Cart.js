import '../style/Cart.css';

function Cart() {
  let products = JSON.parse(localStorage.getItem('CartItems'));

  if (!products || products?.length === 0) {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ textAlign: 'center' }}>Your Products</h1>
        <div className='cart'>
          <h1>No products added yet</h1>
          <h1>Go to Search to begin shopping</h1>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Your Products</h1>
      <div className='cart'>
        <div style={{ padding: '1%' }}>
          <div
            style={{
              marginRight: '1%',
              marginLeft: '1%',
              borderStyle: 'solid',
              borderColor: 'black',
            }}
          >
            {products?.map((item) => (
              <div
                id='productContainer'
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <div style={{ marginRight: '5%', marginLeft: '2%' }}>
                  <img src={item.image} alt='#' width='90px' height='90px' />
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
