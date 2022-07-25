import axios from "axios";
//api route
const API_URL = `${process.env.REACT_APP_BASE_URL}/api/user`;

//manageSignUp
const manageSignUp = async (data) => {
  const response = await axios.post(`${API_URL}/sign-up`, data);
  //if we get data in response we will save it to localstorage
  if (!response.data.message) {
    localStorage.setItem("esUser", JSON.stringify(response.data));
  }
  return response.data;
};

//logout
const logout = () => {
  localStorage.removeItem("esUser");
};

//export all these functions
const userService = {
  manageSignUp,
  logout,
};

export default userService;
