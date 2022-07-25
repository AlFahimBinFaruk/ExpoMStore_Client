import { MDBCol, MDBBtn } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { useGlobalAlertContext } from "../../contexts/alertContext";
const Account = () => {
  let { setShowAlert } = useGlobalAlertContext();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  //handle logout
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
    setShowAlert({ msg: "Logout successful.", color: "warning" });
  };
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <MDBCol size="12" md="8" lg="4">
        <div className="d-flex justify-content-between">
          <h5 className="text-center">Account Settings</h5>
          <MDBBtn size="sm" color="danger" onClick={handleLogout}>
            Logout
          </MDBBtn>
        </div>

        <div className="account-info mt-4">
          <h6>Username:{userInfo?.username}</h6>
          <h6>Email:{userInfo?.email}</h6>
        </div>

        <div className="d-flex justify-content-around mt-5">
          <MDBBtn
            size="sm"
            color="dark"
            onClick={() => navigate("/order-history")}
          >
            Order History
          </MDBBtn>
        </div>
      </MDBCol>
    </div>
  );
};

export default Account;
