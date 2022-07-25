import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import orderService from "./orderService";

//initial state
const initialState = {
  orderList: null,
  orderDetails: null,
  paymentRoutes: null,
  isOrderError: false,
  isOrderSuccess: false,
  isOrderLoading: false,
  orderMessage: "",
};

/**
 * get my order list
 */
export const getMyOrderList = createAsyncThunk(
  "order/getMyOrderList",
  async (_, thunkAPI) => {
    try {
      //get the user token ..
      const token = thunkAPI.getState().user.userInfo.token;
      return await orderService.getMyOrderList(token);
    } catch (error) {
      const orderMessage =
        (error.response &&
          error.response.data &&
          error.response.data.orderMessage) ||
        error.orderMessage ||
        error.toString();

      return thunkAPI.rejectWithValue(orderMessage);
    }
  }
);
/**
 * get my order details
 */
export const getMyOrderDetails = createAsyncThunk(
  "order/getMyOrderDetails",
  async (id, thunkAPI) => {
    try {
      //get the user token ..
      const token = thunkAPI.getState().user.userInfo.token;
      return await orderService.getMyOrderDetails(id, token);
    } catch (error) {
      const orderMessage =
        (error.response &&
          error.response.data &&
          error.response.data.orderMessage) ||
        error.orderMessage ||
        error.toString();

      return thunkAPI.rejectWithValue(orderMessage);
    }
  }
);

/**
 * manage checkout
 */
export const manageCheckout = createAsyncThunk(
  "order/manageCheckout",
  async (data, thunkAPI) => {
    try {
      //get the user token ..
      const token = thunkAPI.getState().user.userInfo.token;
      return await orderService.manageCheckout(data, token);
    } catch (error) {
      const orderMessage =
        (error.response &&
          error.response.data &&
          error.response.data.orderMessage) ||
        error.orderMessage ||
        error.toString();

      return thunkAPI.rejectWithValue(orderMessage);
    }
  }
);

//order slice
export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    reset: (state) => {
      state.isOrderLoading = false;
      state.isOrderSuccess = false;
      state.isOrderError = false;
      state.orderMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMyOrderList.pending, (state) => {
        state.isOrderLoading = true;
      })
      .addCase(getMyOrderList.fulfilled, (state, action) => {
        state.isOrderLoading = false;
        state.isOrderSuccess = true;
        state.orderList = action.payload;
      })
      .addCase(getMyOrderList.rejected, (state, action) => {
        state.isOrderLoading = false;
        state.isOrderError = true;
        state.orderMessage = action.payload;
      })
      .addCase(getMyOrderDetails.pending, (state) => {
        state.isOrderLoading = true;
      })
      .addCase(getMyOrderDetails.fulfilled, (state, action) => {
        state.isOrderLoading = false;
        state.isOrderSuccess = true;
        state.orderDetails = action.payload;
      })
      .addCase(getMyOrderDetails.rejected, (state, action) => {
        state.isOrderLoading = false;
        state.isOrderError = true;
        state.orderMessage = action.payload;
      })
      .addCase(manageCheckout.pending, (state) => {
        state.isOrderLoading = true;
      })
      .addCase(manageCheckout.fulfilled, (state, action) => {
        state.isOrderLoading = false;
        state.isOrderSuccess = true;
        state.paymentRoutes = action.payload;
      })
      .addCase(manageCheckout.rejected, (state, action) => {
        state.isOrderLoading = false;
        state.isOrderError = true;
        state.orderMessage = action.payload;
      });
  },
});

//export slice reset function
export const { reset } = orderSlice.actions;

//export the  slice
export default orderSlice.reducer;
