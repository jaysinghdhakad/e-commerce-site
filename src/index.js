import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom"
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {LoginContext, LoginProvider} from "./contexts/login.context"
import { RouteProvider } from "./contexts/route-context.js";
import { CartProvider } from "./contexts/cart-context";
import { WishProvider } from "./contexts/wishlist-context";
import {
 
  SortAndFilterProvider,
} from "./contexts/sortAndFilters-context";
import ScrollToTop from "./common components/scroll-to-top"
import {ProductDisplayProvider} from "./contexts/productDisplay-context"
import {DataProvider} from "./contexts/userData-context"
ReactDOM.render(
  <React.StrictMode>
   
    <Router>
      <DataProvider>
      <LoginProvider>
    <ProductDisplayProvider>
    <SortAndFilterProvider>
      <WishProvider>
        <CartProvider>
           <ScrollToTop/>
            <App />
         
        </CartProvider>
      </WishProvider>
    </SortAndFilterProvider>
    </ProductDisplayProvider>
    </LoginProvider>
    </DataProvider>
    </Router>
   
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
