import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
const SignUp = () => {
  return (
    <div className="sign-up d-flex flex-column justify-content-center align-items-center vh-100">
      <h6>Sign up with:</h6>
      {/* btn */}
      <MDBBtn rounded color="dark" className="mt-2">
        <MDBIcon fab icon="google" />
        <span className="ms-1">Google</span>
      </MDBBtn>
    </div>
  );
};

export default SignUp;
