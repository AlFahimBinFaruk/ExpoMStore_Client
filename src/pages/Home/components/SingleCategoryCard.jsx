import { MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

const SingleCategoryCard = ({ _id, title, thumbnail }) => {
  let navigate = useNavigate();
  return (
    <MDBCard
      className="h-100 shadow"
      role="button"
      onClick={() => navigate(`/shop/${_id}`)}
    >
      <MDBCardImage src={thumbnail} position="top" alt="..." />
      <MDBCardBody>
        <h6>{title}</h6>
      </MDBCardBody>
    </MDBCard>
  );
};

export default SingleCategoryCard;
