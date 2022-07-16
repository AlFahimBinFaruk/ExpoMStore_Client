import { MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";

const SingleProductCard = () => {
  return (
    <MDBCard className="h-100 shadow" role="button">
      <MDBCardImage
        src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
        position="top"
        alt="..."
      />
      <MDBCardBody>
        <h6>Steinway Upright K-132</h6>
        <p>
          <small>$123</small>
        </p>
      </MDBCardBody>
    </MDBCard>
  );
};

export default SingleProductCard;
