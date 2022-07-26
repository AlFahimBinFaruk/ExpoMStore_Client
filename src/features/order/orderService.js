import axios from "axios";
//api route
const API_URL = `${process.env.REACT_APP_BASE_URL}/api/order`;

//get My OrderList
const getMyOrderList = async (token) => {
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(
    `${API_URL}/my-order-history`,
    config
  );

  return response.data;
};

//getMyOrderDetails
const getMyOrderDetails = async (id, token) => {
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${API_URL}/my-order-details/${id}`, config);
  return response.data;
};

//manageCheckout
const manageCheckout = async (data, token) => {
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(`${API_URL}/checkout`, data, config);

  return response.data;
};

//export all these functions
const orderService = {
  getMyOrderList,
  getMyOrderDetails,
  manageCheckout,
};

export default orderService;
