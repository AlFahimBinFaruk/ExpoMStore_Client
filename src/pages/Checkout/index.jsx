import {
  MDBCol,
  MDBRow,
  MDBInput,
  MDBTextArea,
  MDBBtn,
} from "mdb-react-ui-kit";

import OrderSummary from "./components/OrderSummary";

const Checkout = () => {
  return (
    <div className="checkout">
      <MDBRow className="align-items-center justify-content-center">
        {/* checkout form */}
        <MDBCol size="12" lg="5">
          <div className="checkout-form my-5">
            <h5 className="mb-3">Please provide all the checkout info.</h5>
            <div>
              <MDBInput id="name" wrapperClass="mb-2" label="Name" size="sm" />
              <MDBInput
                type="email"
                id="email"
                wrapperClass="mb-2"
                label="Email address"
                size="sm"
              />
              <MDBTextArea label="Address" id="address" rows={4} size="sm" />
              <h6 className="text-muted mt-3">
                Payment type:<span className="text-dark ms-1">Stripe</span>
              </h6>
            </div>
          </div>
          {/* place order btn */}
          <MDBBtn className="rounded-0 mt-2" block>
            Place Order
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
