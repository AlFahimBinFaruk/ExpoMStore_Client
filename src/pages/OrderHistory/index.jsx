import { MDBCol, MDBTable, MDBTableBody } from "mdb-react-ui-kit";
import { useState } from "react";
import SingleOrderHistoryItem from "./components/SingleOrderHistoryItem";

const OrderHistory = () => {
  const [count, setcount] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <MDBCol size="12" lg="8" className="mx-auto">
      <div className="mb-5 text-center">
        <h5>Your order history</h5>
      </div>

      <MDBTable>
        {/* table body */}
        <MDBTableBody>
          {count.map((i) => {
            return <SingleOrderHistoryItem />;
          })}
        </MDBTableBody>
      </MDBTable>
    </MDBCol>
  );
};

export default OrderHistory;
