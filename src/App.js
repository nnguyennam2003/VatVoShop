import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import Tutorial from "./pages/Tutorial";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

function App() {
  // const [apiText, setApiText] = useState(""); // State để lưu trữ đoạn văn bản từ API

  // useEffect(() => {
  //   // Giả sử bạn đã fetch đoạn văn bản từ API và set nó vào state apiText
  //   const fetchedText =
  //     "Áo thun Only (i)Fans thiết kế dành cho các anh em fan Apple với logo quả táo cắn dở quen thuộc cùng sự xuất hiện của các danh lam thắng cảnh Việt Nam.";
  //   setApiText(fetchedText);
  // }, []);
  return (
    <div className="App">
      <Header />
      <div className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </div>
    // <div className="container">
    //   <div className="description">
    //     {/* Sử dụng CSS để áp dụng kiểu in đậm cho các từ cụ thể */}
    //     <span className="bold-text">Áo thun</span>
    //     {apiText.replace("Áo thun Only (i)Fans", "")}
    //   </div>
    // </div>
  );
}

export default App;
