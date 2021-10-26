import Home from "./pages/Home";
import { createGlobalStyle } from 'styled-components'
import ProductList from "./pages/ProductList";
import Product from "./pages/Product"
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import GlobalStyle from "./components/GlobalStyle";

const App = () => {
  return (
    <div>
      <GlobalStyle/>
      <Home/>
      <ProductList/>
      <Product/>
       <Register/>
      <Login/>
      <Cart/>
    </div>
  );
};

export default App;
