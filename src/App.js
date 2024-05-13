import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import Tutorial from "./pages/Tutorial";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productDetail/:productDetailId" element={<ProductDetail />} />
        </Routes>
      </div>
      <Footer />
    </div>

  );
}

export default App;
