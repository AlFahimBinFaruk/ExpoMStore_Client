import { MDBRow, MDBCol, MDBTable, MDBTableBody } from "mdb-react-ui-kit";
import { useState } from "react";

import CartSummary from "./components/CartSummary";
import SingleCartItem from "./components/SingleCartItem";

const Cart = () => {
  const [count, setcount] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <div className="cart">
      <MDBRow className="justify-content-center">
        <h5 className="text-center mb-5">Your Cart</h5>
        {/* cart-item-list */}
        <MDBCol size="12" lg="6">
          <MDBTable borderless>
            {/* table body */}
            <MDBTableBody>
              {/* single cart item */}
              {count.map((i, index) => {
                return <SingleCartItem key={index} {...i} />;
              })}
            </MDBTableBody>
          </MDBTable>
        </MDBCol>
        {/* summary */}
        <MDBCol size="12" lg="3">
          <CartSummary />
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Cart;
