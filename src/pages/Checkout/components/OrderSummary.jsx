//MDB
import { MDBCard, MDBCardBody, MDBCardTitle } from "mdb-react-ui-kit";

const OrderSummary = () => {
  return (
    <MDBCard className="shadow rounded-0">
      <MDBCardBody>
        <MDBCardTitle className="text-dark">Order Summary</MDBCardTitle>
        {/* product count */}
        <div className="product-count">
          {/* prodcut list */}
          <div className="product-list">
            <div className="single-product">
              <div className="d-flex justify-content-between align-items-center">
                <small>tst</small>
                <small>
                  <b>$43</b> X 43
                </small>
              </div>
            </div>
          </div>

          {/* subtotal */}
          <div className="d-flex justify-content-between align-items-center mt-4 text-dark">
            <p className="mb-0">Subtotal</p>
            <p className="mb-0">
              <b>$55</b>
            </p>
          </div>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};

export default OrderSummary;
