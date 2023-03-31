import './style/App.css';

//Router Imports:

import Login from './pages/Login';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Search from './pages/Search';
import Account from './pages/Account';
import Nav from './navigation/nav';
import ProtectedRoutes from './ProtectedRoutes';
import ProductPage from './pages/ProductPage';
import ProductImage from './pages/ProductImage';
import Cart from './pages/Cart';

//Router imports
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/product/:id/:url" element={<ProductImage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/search" element={<Search />} />
            <Route path="/account" element={<Account />} />
            <Route path="/productDetails" element={<ProductDetails />} />
            <Route path="/Cart" element={<Cart />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
