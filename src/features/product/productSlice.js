import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService";

//initial state
const initialState = {
  productList: null,
  productDetails: null,
  isProductError: false,
  isProductSuccess: false,
  isProductLoading: false,
  productMessage: "",
};

/**
 * get active product list
 */
export const getProductList = createAsyncThunk(
  "product/getProductList",
  async ({ pageNo, categoryId }, thunkAPI) => {
    try {
      return await productService.getProductList(pageNo, categoryId);
    } catch (error) {
      const productMessage =
        (error.response &&
          error.response.data &&
          error.response.data.productMessage) ||
        error.productMessage ||
        error.toString();

      return thunkAPI.rejectWithValue(productMessage);
    }
  }
);
/**
 * get product details
 */
export const getProductDetails = createAsyncThunk(
  "product/getProductDetails",
  async (id, thunkAPI) => {
    try {
      return await productService.getProductDetails(id);
    } catch (error) {
      const productMessage =
        (error.response &&
          error.response.data &&
          error.response.data.productMessage) ||
        error.productMessage ||
        error.toString();

      return thunkAPI.rejectWithValue(productMessage);
    }
  }
);

//product slice
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    reset: (state) => {
      state.isProductLoading = false;
      state.isProductSuccess = false;
      state.isProductError = false;
      state.productMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductList.pending, (state) => {
        state.isProductLoading = true;
      })
      .addCase(getProductList.fulfilled, (state, action) => {
        state.isProductLoading = false;
        state.isProductSuccess = true;
        state.productList = action.payload;
      })
      .addCase(getProductList.rejected, (state, action) => {
        state.isProductLoading = false;
        state.isProductError = true;
        state.productMessage = action.payload;
      })
      .addCase(getProductDetails.pending, (state) => {
        state.isProductLoading = true;
      })
      .addCase(getProductDetails.fulfilled, (state, action) => {
        state.isProductLoading = false;
        state.isProductSuccess = true;
        state.productDetails = action.payload;
      })
      .addCase(getProductDetails.rejected, (state, action) => {
        state.isProductLoading = false;
        state.isProductError = true;
        state.productMessage = action.payload;
      });
  },
});

//export slice reset function
export const { reset } = productSlice.actions;

//export the  slice
export default productSlice.reducer;
