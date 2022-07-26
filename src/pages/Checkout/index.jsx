import { MDBCol, MDBRow, MDBTextArea, MDBBtn } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OrderSummary from "./components/OrderSummary";
import { manageCheckout } from "../../features/order/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import { useGlobalCartInfoContext } from "../../contexts/cartContext";
import { useGlobalAlertContext } from "../../contexts/alertContext";
import LoadingSpinner from "../../common_components/LoadingSpinner";
const Checkout = () => {
  let { cartItemListDetails } = useGlobalCartInfoContext();
  let { setShowAlert } = useGlobalAlertContext();
  const [address, setAddress] = useState("");
  let navigate = useNavigate();
  //user
  const { userInfo } = useSelector((state) => state.user);
  let { username, email } = userInfo || false;
  //order
  const { paymentRoutes, isOrderLoading, isOrderError } = useSelector(
    (state) => state.order
  );
  const dispatch = useDispatch();
  //handle check out
  const handleCheckout = () => {
    let orderDetails = cartItemListDetails.map((i) => {
      return { productId: i.id, qty: i.qty };
    });
    const data = {
      address,
      orderDetails,
    };
    //console.log(address, cartItemListDetails);
    dispatch(manageCheckout(data));
  };
  //if order is places successfully redirect to payment route
  useEffect(() => {
    if (paymentRoutes) {
      window.location = paymentRoutes.checkoutURL;
    }
  }, [navigate, paymentRoutes]);

  //if there is error
  useEffect(() => {
    if (isOrderError) {
      setShowAlert({ msg: "Some error occured!", color: "danger" });
    }
  }, [isOrderError, setShowAlert]);
  
  //if page is loading
  if (isOrderLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="checkout">
      <MDBRow className="align-items-center justify-content-center">
        {/* checkout form */}
        <MDBCol size="12" lg="5">
          <div className="checkout-form my-5">
            <h5 className="mb-3">Please provide all the checkout info.</h5>
            <div>
              <h6>Username: {username}</h6>
              <h6>Email: {email}</h6>
              <MDBTextArea
                label="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                rows={4}
                size="sm"
              />
              <h6 className="text-muted mt-3">
                Payment type:<span className="text-dark ms-1">Stripe</span>
              </h6>
            </div>
          </div>
          {/*checkout  btn */}
          <MDBBtn className="rounded-0 mt-2" block onClick={handleCheckout}>
            Checkout
          </MDBBtn>
        </MDBCol>
        {/* order summary */}
        <MDBCol size="12" lg="4">
          <OrderSummary />
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Checkout;
