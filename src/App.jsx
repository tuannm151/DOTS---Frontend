import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product"
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import React from "react";
import ScrollToTop from "./utils/utils"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useSelector } from "react-redux";

  // {/* <Product/>
  //       <Register/>
  //       <Login/>
  //       <Cart/> */}

const App = () => {
  const user = useSelector(state=>state.user.currentUser);
  return ( 
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/products/:category">
          <ScrollToTop/>
          <ProductList/>
        </Route>
        <Route path="/product/:id">
          <ScrollToTop/>
          <Product/>
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/"/> : <Login/>}
          <Login/>
        </Route>
        <Route path="/register">
           {user ? <Redirect to="/"/> : <Register/>}
          <Register/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
