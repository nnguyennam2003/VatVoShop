import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import Tutorial from "./pages/Tutorial";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import Payment from "./pages/Payment";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRouteUser";
import { useEffect } from "react";
import RedirectIfAuthenticated from "./components/ProtectedRoute/RedirectIfAuthenticated";
import AdminPage from "./pages/Admin/AdminPage";
import Dashboard from "./pages/Admin/Dashboard";
import ProductsManage from "./pages/Admin/ProductsManage";
import { fetchCart } from "./services/CartService/CartService";
import { useDispatch } from "react-redux";
import { setCart } from "./redux/slice/cartSlice";

function App() {
  const location = useLocation()
  const isPaymentPage = location.pathname === '/payment'
  const role = localStorage.getItem('role')
  const userId = localStorage.getItem("userId")
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const getCart = async () => {
    try {
      const res = await fetchCart(userId)
      dispatch(setCart(res.cart))
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    if (userId) {
      getCart()
    }
    if (role === 'admin' && !location.pathname.startsWith('/admin')) {
      navigate('/admin/dashboard');
    }
    if (!userId && location.pathname === "/payment") {
      navigate("/login");
    }
  }, [role, location.pathname, navigate, userId]);

  return (
    <div className="App">
      {!isPaymentPage && <Header />}
      {!isPaymentPage && <div className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<RedirectIfAuthenticated />} >
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productDetail/:productDetailId" element={<ProductDetail />} />
          {/* ProtectedRoutes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/cart" element={<Cart />} />
          </Route>

          <Route path="/admin" element={<AdminPage />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products-manage" element={<ProductsManage />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>}
      {!isPaymentPage && role !== 'admin' && <Footer />}
      {isPaymentPage && <Payment />}
    </div>
  );
}

export default App;
