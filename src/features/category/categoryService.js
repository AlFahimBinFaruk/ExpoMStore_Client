import axios from "axios";
//api route
const API_URL = `${process.env.REACT_APP_BASE_URL}/api/category`;

//getCategoryList
const getCategoryList = async (pageNo) => {
  const response = await axios.get(`${API_URL}/category-list?pageNo=${pageNo}`);
  return response.data;
};

//export all these functions
const categoryService = {
  getCategoryList,
};

export default categoryService;
