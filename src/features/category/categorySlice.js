import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import categoryService from "./categoryService";

//initial state
const initialState = {
  categoryList: null,
  isCategoryError: false,
  isCategorySuccess: false,
  isCategoryLoading: false,
  categoryMessage: "",
};

/**
 * get active category list
 */
export const getCategoryList = createAsyncThunk(
  "category/getCategoryList",
  async (pageNo, thunkAPI) => {
    try {
      return await categoryService.getCategoryList(pageNo);
    } catch (error) {
      const categoryMessage =
        (error.response &&
          error.response.data &&
          error.response.data.categoryMessage) ||
        error.categoryMessage ||
        error.toString();

      return thunkAPI.rejectWithValue(categoryMessage);
    }
  }
);

//category
export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    reset: (state) => {
      state.isCategoryLoading = false;
      state.isCategorySuccess = false;
      state.isCategoryError = false;
      state.categoryMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategoryList.pending, (state) => {
        state.isCategoryLoading = true;
      })
      .addCase(getCategoryList.fulfilled, (state, action) => {
        state.isCategoryLoading = false;
        state.isCategorySuccess = true;
        state.categoryList = action.payload;
      })
      .addCase(getCategoryList.rejected, (state, action) => {
        state.isCategoryLoading = false;
        state.isCategoryError = true;
        state.categoryMessage = action.payload;
      });
  },
});

//export slice reset function
export const { reset } = categorySlice.actions;

//export the  slice
export default categorySlice.reducer;
