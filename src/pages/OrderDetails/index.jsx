import { MDBCol, MDBTable, MDBTableBody } from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getMyOrderDetails, reset } from "../../features/order/orderSlice";
import { useEffect } from "react";
import LoadingSpinner from "../../common_components/LoadingSpinner";
import ServerErrorPage from "../Error/ServerErrorPage";
import SingleOrderDetailsItem from "./components/SingleOrderDetailsItem";

const OrderDetails = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  //get initial state from product store
  const { orderDetails, isOrderLoading, isOrderError } = useSelector(
    (state) => state.order
  );
  //orderdetails info
  let { _id, userDetails, total, paymentStatus, orderStatus, tranId, address } =
    orderDetails || false;
  //by default one time
  useEffect(() => {
    dispatch(getMyOrderDetails(id));
    return () => {
      dispatch(reset());
    };
  }, [dispatch, id]);

  //if there are error
  if (isOrderError) {
    return <ServerErrorPage />;
  }

  //if the page is loading
  if (isOrderLoading) {
    return <LoadingSpinner />;
  }
  return (
    <MDBCol size="12" lg="6" className="mx-auto">
      {orderDetails ? (
        <>
          <h6 className="mb-4">Order Id:{_id}</h6>
          <MDBTable>
            {/* table body */}
            <MDBTableBody>
              {orderDetails?.orderDetails.map((i) => {
                return <SingleOrderDetailsItem {...i} />;
              })}
            </MDBTableBody>
          </MDBTable>
          <div className="my-5">
            <h6>
              <span className="text-muted">Total:</span>${total}
            </h6>
            <h6>
              <span className="text-muted"> order status:</span>
              {orderStatus}
            </h6>
            <h6>
              <span className="text-muted">payment status:</span>
              {paymentStatus}
            </h6>
            <h6>
              <span className="text-muted">Tran Id:</span>
              {tranId}
            </h6>
            <h6>
              <span className="text-muted">address:</span>
              {address}
            </h6>
            <h6>
              <span className="text-muted">email:</span>
              {userDetails?.email}
            </h6>
          </div>
        </>
      ) : (
        <p>Provide correct info!!</p>
      )}
    </MDBCol>
  );
};

export default OrderDetails;
