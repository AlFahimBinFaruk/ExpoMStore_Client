import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import "./App.css";
import Footer from "./common_components/Footer";
import Header from "./common_components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import OrderDetails from "./pages/OrderDetails";
import OrderHistory from "./pages/OrderHistory";
import ProdcutDetails from "./pages/ProductDetails";
import Search from "./pages/Search";
import Shop from "./pages/Shop";
import Account from "./pages/User/Account";

function App() {
  return (
    <div className="App">
      {/* header */}
      <Header />
      <MDBContainer className="my-5">
        {/* <Home /> */}
        {/* <Shop /> */}
        {/* <ProdcutDetails/> */}
        {/* <Search/> */}
        {/* <Cart/> */}
        {/* <OrderHistory/> */}
        {/* <OrderDetails/> */}
        <Account/>
      </MDBContainer>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
