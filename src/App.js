import { MDBContainer } from "mdb-react-ui-kit";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./common_components/Footer";
import Header from "./common_components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import OrderDetails from "./pages/OrderDetails";
import OrderHistory from "./pages/OrderHistory";
import ProdcutDetails from "./pages/ProductDetails";
import Shop from "./pages/Shop";
import Account from "./pages/User/Account";
import SignUp from "./pages/User/SignUp";
import Alert from "./common_components/Alert";
import PageNotFound from "./pages/Error/PageNotFound";
import ServerErrorPage from "./pages/Error/ServerErrorPage";
import Success from "./pages/Payment/Success";
import Fail from "./pages/Payment/Fail";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* header */}
        <Header />
        <MDBContainer className="my-5">
          {/* alert */}
          <Alert />
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />
            {/* Shop */}
            <Route path="/shop" element={<Shop />} />
            {/* ProdcutDetails */}
            <Route path="/details/:id" element={<ProdcutDetails />} />
            {/* Cart */}
            <Route path="/cart" element={<Cart />} />
            {/* OrderHistory */}
            <Route path="/order-history" element={<OrderHistory />} />
            {/* OrderDetails */}
            <Route path="/order-details/:id" element={<OrderDetails />} />
            {/* SignUp */}
            <Route path="/sign-up" element={<SignUp />} />
            {/* Account */}
            <Route path="/my-account" element={<Account />} />
            {/* checkout */}
            <Route path="/checkout" element={<Checkout />} />
            {/* Success */}
            <Route path="/payment-success" element={<Success />} />
            {/* Fail */}
            <Route path="/payment-fail" element={<Fail />} />
            {/* ServerErrorPage */}
            <Route path="/server-error" element={<ServerErrorPage />} />
            {/* PageNotFound */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </MDBContainer>
      </BrowserRouter>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
