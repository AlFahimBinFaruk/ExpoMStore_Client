import { MDBCol, MDBTable, MDBTableBody } from "mdb-react-ui-kit";
import { useState } from "react";
import SingleOrderDetailsItem from "./components/SingleOrderDetailsItem";

const OrderDetails = () => {
  const [count, setcount] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <MDBCol size="12" lg="6" className="mx-auto">
      <h6 className="mb-4">Order Id:43534435</h6>
      <MDBTable>
        {/* table body */}
        <MDBTableBody>
          {count.map((i) => {
            return <SingleOrderDetailsItem {...i} />;
          })}
        </MDBTableBody>
      </MDBTable>
      <div className="my-5">
        <h6>
          <span className="text-muted">Total:</span>$42
        </h6>
        <h6>
          <span className="text-muted"> order status:</span>
          pending
        </h6>
        <h6>
          <span className="text-muted">payment status:</span>
          pending
        </h6>
        <h6>
          <span className="text-muted">order type:</span>
          test
        </h6>
        <h6>
          <span className="text-muted">address:</span>
          test
        </h6>
        <h6>
          <span className="text-muted">email:</span>
          test
        </h6>
      </div>
    </MDBCol>
  );
};

export default OrderDetails;
