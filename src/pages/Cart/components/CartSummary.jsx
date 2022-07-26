import { MDBCard, MDBCardBody, MDBCardTitle, MDBBtn } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { useGlobalCartInfoContext } from "../../../contexts/cartContext";

const CartSummary = () => {
  let { subTotal } = useGlobalCartInfoContext();
  let navigate = useNavigate();
  return (
    <MDBCard className="shadow rounded-0">
      <MDBCardBody>
        <MDBCardTitle className="text-dark">Cart Summary</MDBCardTitle>
        {/* product count */}
        <div className="product-count">
          {/* subtotal */}
          <div className="d-flex justify-content-between align-items-center mt-4 text-dark">
            <p className="mb-0">Subtotal</p>
            <p className="mb-0">
              <b>${subTotal}</b>
            </p>
          </div>
          <MDBBtn
            className="rounded-0 mt-2"
            block
            onClick={() => navigate("/checkout")}
          >
            Proceed Checkout
          </MDBBtn>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};

export default CartSummary;
