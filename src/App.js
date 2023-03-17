import "./App.css";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";
import Products from "./components/products/products";
import { Routes, Route } from "react-router-dom";
import Product from "./components/signProduct/product";
import Cart from "./components/cart/Cart";
import Payment from "./components/payment/payment";
import PaySuccess from "./components/paySuccess/paySuccess";
import About from "./components/about/about";
import Contact from "./components/contact/contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/paysuccess" element={<PaySuccess/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
