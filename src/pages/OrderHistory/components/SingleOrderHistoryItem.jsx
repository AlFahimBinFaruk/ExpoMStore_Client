import { Link } from "react-router-dom";
const SingleOrderHistoryItem = ({ _id, total, paymentStatus, orderStatus }) => {
  return (
    <tr className="verticle-align-middle text-dark" role="button">
      {/* order id */}
      <td>
        <Link to={`/order-details/${_id}`}>
          <span className="fw-bold">Order Id:{_id}</span>
        </Link>
      </td>
      {/* price */}
      <td>
        <span className="fw-bold">Total:${total}</span>
      </td>
      <td>
        <span className="fw-bold">
          <span className="text-muted">Payment status</span>:{paymentStatus}
        </span>
      </td>
      <td>
        <span className="fw-bold">
          <span className="text-muted">Order Status</span>:{orderStatus}
        </span>
      </td>
    </tr>
  );
};

export default SingleOrderHistoryItem;
