import axios from "axios";
//api route
const API_URL = `${process.env.REACT_APP_BASE_URL}/api/product`;

//getProductList
const getProductList = async (pageNo, categoryId) => {
  const response = await axios.get(
    `${API_URL}/get-product-list?pageNo=${pageNo}?categoryId=${categoryId}`
  );

  return response.data;
};
//getProductDetails
const getProductDetails = async (id) => {
  const response = await axios.get(`${API_URL}/details/${id}`);
  return response.data;
};

//export all these functions
const productService = {
  getProductList,
  getProductDetails,
};

export default productService;
