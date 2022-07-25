import { Link } from "react-router-dom";
const SingleOrderDetailsItem = ({ productId, qty }) => {
  return (
    <tr className="verticle-align-middle text-dark">
      {/* product id */}
      <td>
        <Link to={`/details/${productId}`}>
          <span className="fw-bold">Product Id:{productId}</span>
        </Link>
      </td>
      <td>
        <span className="fw-bold">qty:{qty}</span>
      </td>
    </tr>
  );
};

export default SingleOrderDetailsItem;
