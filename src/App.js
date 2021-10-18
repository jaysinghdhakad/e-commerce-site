import logo from "./logo.svg";
import { useRoute } from "./contexts/route-context";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from  "./common components/footer"
// import { createBrowserHistory, History } from 'history'
import Header from "./common components/header";
import CartPage from "./pages/cart-page";
import PrivateRoute from "./common components/private-route";
import WishListPage from "./pages/wishlist-page";
import ProductPage from "./pages/product-page";
import ToggleRoute from "./common components/toggle-route"
import ProductDescriptionPage from "./pages/productDescription-page";

import LandingPage from "./pages/Landing-page";

import AuthenticationPage from "./pages/authentication-page";

import SignupPage from "./pages/signup-page";
function App() {
  

  return (
    <div className="App">
      <Header />
      
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id" element={<ProductDescriptionPage />} />
        <ToggleRoute path="/log-in" element={<AuthenticationPage />} />
        <ToggleRoute path="/sign-up" element={<SignupPage />} />
        <PrivateRoute path="/wish-list" element={<WishListPage />} />
        <PrivateRoute path="/cart" element={<CartPage />} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
