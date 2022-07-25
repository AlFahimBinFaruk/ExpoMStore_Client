import { MDBCol, MDBTable, MDBTableBody } from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { getMyOrderList, reset } from "../../features/order/orderSlice";
import { useEffect } from "react";
import SingleOrderHistoryItem from "./components/SingleOrderHistoryItem";
import LoadingSpinner from "../../common_components/LoadingSpinner";
import ServerErrorPage from "../Error/ServerErrorPage";

const OrderHistory = () => {
  const dispatch = useDispatch();
  //get initial state from product store
  const { orderList, isOrderLoading, isOrderError } = useSelector(
    (state) => state.order
  );

  //by default one time
  useEffect(() => {
    dispatch(getMyOrderList());
    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  //if there are error
  if (isOrderError) {
    return <ServerErrorPage />;
  }

  //if the page is loading
  if (isOrderLoading) {
    return <LoadingSpinner />;
  }
  return (
    <MDBCol size="12" lg="8" className="mx-auto">
      <div className="mb-5 text-center">
        <h5>Your order history</h5>
      </div>

      <MDBTable>
        {/* table body */}
        <MDBTableBody>
          {orderList ? (
            orderList.map((i, index) => {
              return <SingleOrderHistoryItem {...i} key={index} />;
            })
          ) : (
            <p>Order history is empty!</p>
          )}
        </MDBTableBody>
      </MDBTable>
    </MDBCol>
  );
};

export default OrderHistory;
