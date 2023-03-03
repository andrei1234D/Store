import './style/App.css';

//Router Imports:

import Login from './pages/Login';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Search from './pages/Search';
import Account from './pages/Account';
import Nav from './navigation/nav';
import ProtectedRoutes from './ProtectedRoutes';

//Router imports
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
localStorage.setItem('isLoggedIn', 'false');
function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/Search" element={<Search />} />
            <Route path="/Account" element={<Account />} />
            <Route path="/ProductDetails" element={<ProductDetails />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
