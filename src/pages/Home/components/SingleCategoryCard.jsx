import { MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";

const SingleCategoryCard = () => {
  return (
    <MDBCard className="h-100 shadow" role="button">
      <MDBCardImage
        src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
        position="top"
        alt="..."
      />
      <MDBCardBody>
        <h6>Cateogry name</h6>
      </MDBCardBody>
    </MDBCard>
  );
};

export default SingleCategoryCard;
