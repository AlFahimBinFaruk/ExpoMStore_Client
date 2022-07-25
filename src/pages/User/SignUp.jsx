import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { manageSignUp } from "../../features/user/userSlice";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useGlobalAlertContext } from "../../contexts/alertContext";

const SignUp = () => {
  let { setShowAlert } = useGlobalAlertContext();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //auth
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  //handle google signin
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const user = result.user;
        if (user) {
          const data = {
            username: user.displayName,
            email: user.email,
          };
          dispatch(manageSignUp(data));
          setShowAlert({ msg: "Login successful.", color: "success" });
          navigate("/");
        }
      })
      .catch((error) => {
        // Handle Errors here.
        setShowAlert({ msg: error.message, color: "danger" });
      });
  };
  return (
    <div className="sign-up d-flex flex-column justify-content-center align-items-center vh-100">
      <h6>Sign up with:</h6>
      {/* btn */}
      <MDBBtn
        rounded
        color="dark"
        className="mt-2"
        onClick={handleGoogleSignIn}
      >
        <MDBIcon fab icon="google" />
        <span className="ms-1">Google</span>
      </MDBBtn>
    </div>
  );
};

export default SignUp;
