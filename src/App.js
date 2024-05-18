import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import Tutorial from "./pages/Tutorial";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import Payment from "./pages/Payment";

function App() {
  const location = useLocation()
  const isPaymentPage = location.pathname === '/payment'
  return (
    <div className="App">
      {!isPaymentPage && <Header />}
      {!isPaymentPage && <div className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productDetail/:productDetailId" element={<ProductDetail />} />
        </Routes>
      </div>}
      {!isPaymentPage && <Footer />}
      {isPaymentPage && <Payment />}
    </div>

  );
}

export default App;
