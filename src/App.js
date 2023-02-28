import './style/App.css';

//Router Imports:

import Login from './pages/Login';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Search from './pages/search';
import Nav from './navigation/nav';

//Router imports
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ProductDetails" element={<ProductDetails />} />
          <Route path="/Search" element={<Search />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
