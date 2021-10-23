import Home from "./pages/Home";
import { createGlobalStyle } from 'styled-components'
import ProductList from "./pages/ProductList";
import Product from "./pages/Product"
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
`
const App = () => {
  return (
    <div>
      <GlobalStyle/>
      <Home/>
      {/* <ProductList/> */}
      {/* <Product/> */}
      {/* <Register/> */}
      {/* <Login/> */}
      {/* <Cart/> */}
    </div>
  );
};

export default App;
