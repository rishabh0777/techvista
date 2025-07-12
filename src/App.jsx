import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Product from "./components/Product";
import Items from "./components/Items";
import SearchedItem from "./components/SearchedItem";
import ProductInfo from "./components/ProductInfo";
import Checkout from "./components/Checkout";
import Ordered from "./components/Ordered";


function App() {
  return (
    <>
   
      <Router basename="/techvista/">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Hero />} />
            <Route path="cart" element={<Cart />} />
            <Route path="product" element={<Product />} />
            <Route path="categoriesItems" element={<Items />} />
            <Route path="searchItems" element={<SearchedItem />} />
            <Route path="productinfo" element={<ProductInfo />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="ordered" element={<Ordered />} />

          </Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </Router>
         
    </>
  );
}

export default App;
