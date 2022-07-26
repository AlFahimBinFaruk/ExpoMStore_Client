//MDB
import { MDBCard, MDBCardBody, MDBCardTitle } from "mdb-react-ui-kit";
import { useGlobalCartInfoContext } from "../../../contexts/cartContext";

const OrderSummary = () => {
  let { cartItemListDetails, subTotal } = useGlobalCartInfoContext();
  return (
    <MDBCard className="shadow rounded-0">
      <MDBCardBody>
        <MDBCardTitle className="text-dark">Order Summary</MDBCardTitle>
        {/* product count */}
        <div className="product-count">
          {/* prodcut list */}
          <div className="product-list">
            {cartItemListDetails.map((i) => {
              return (
                <div className="single-product">
                  <div className="d-flex justify-content-between align-items-center">
                    <small>{i.title}</small>
                    <small>
                      <b>${i.price}</b> X {i.qty}
                    </small>
                  </div>
                </div>
              );
            })}
          </div>

          {/* subtotal */}
          <div className="d-flex justify-content-between align-items-center mt-4 text-dark">
            <p className="mb-0">Subtotal</p>
            <p className="mb-0">
              <b>${subTotal}</b>
            </p>
          </div>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};

export default OrderSummary;
