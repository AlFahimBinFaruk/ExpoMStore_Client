import { MDBRow, MDBCol, MDBTable, MDBTableBody } from "mdb-react-ui-kit";
import { useState } from "react";
import { useGlobalCartInfoContext } from "../../contexts/cartContext";
import CartSummary from "./components/CartSummary";
import SingleCartItem from "./components/SingleCartItem";

const Cart = () => {
  let { cartItemListDetails } = useGlobalCartInfoContext();
  return (
    <div className="cart">
      {cartItemListDetails?.length > 0 ? (
        <MDBRow className="justify-content-center">
          <h5 className="text-center mb-5">Your Cart</h5>
          {/* cart-item-list */}
          <MDBCol size="12" lg="6">
            <MDBTable borderless>
              {/* table body */}
              <MDBTableBody>
                {/* single cart item */}
                {cartItemListDetails.map((i, index) => {
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
      ) : (
        <p>Cart is empty!!</p>
      )}
    </div>
  );
};

export default Cart;
