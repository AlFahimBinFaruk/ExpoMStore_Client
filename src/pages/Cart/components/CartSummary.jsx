//MDB
import { MDBCard, MDBCardBody, MDBCardTitle, MDBBtn } from "mdb-react-ui-kit";

const CartSummary = () => {
  //   const calculateSummary = () => {
  //     let total = 0;
  //     cartItemListDetails.map((i) => {
  //       total += Number(i.price) * Number(i.qty);
  //     });
  //     setSubtotal(total)
  //   };

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
              <b>$55</b>
            </p>
          </div>
          <MDBBtn className="rounded-0 mt-2" block>
            Proceed Checkout
          </MDBBtn>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};

export default CartSummary;
