import { MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

const SingleProductCard = ({ _id, title, thumbnail, price }) => {
  let navigate = useNavigate();
  return (
    <MDBCard
      className="h-100 shadow"
      role="button"
      onClick={() => navigate(`/details/${_id}`)}
    >
      <MDBCardImage src={thumbnail} position="top" alt="..." />
      <MDBCardBody>
        <h6>{title}</h6>
        <p>
          <small>${price}</small>
        </p>
      </MDBCardBody>
    </MDBCard>
  );
};

export default SingleProductCard;
