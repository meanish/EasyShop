import "./App.css";
import { Routes, Route } from "react-router-dom";
import Shop from "./Shop/Shop";
import Home from "./Home/Home";
import Product from "./Shop/Product";
import Register from "./Login/Register";
import ShoppingCart from "./Home/ShoppingCart";
import ShoppCart from "./Home/ShoppCart";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="product" element={<Product />} />
        <Route path="register" element={<Register />} />
        <Route path="shoppingCart" element={<ShoppingCart />} />
        <Route path="shoppCart" element={<ShoppCart />} />
      </Routes>
    </>
  );
}

export default App;
