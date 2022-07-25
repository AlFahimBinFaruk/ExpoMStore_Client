import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";

//get admin info from localstorage if it exits.
const userInfo = JSON.parse(localStorage.getItem("esUser"));

//initial state
const initialState = {
  userInfo: userInfo ? userInfo : null,
  isUserError: false,
  isUserSuccess: false,
  isUserLoading: false,
  userMessage: "",
};

/**
 * signup user
 */
export const manageSignUp = createAsyncThunk(
  "user/manageSignUp",
  async (data, thunkAPI) => {
    try {
      return await userService.manageSignUp(data);
    } catch (error) {
      const userMessage =
        (error.response &&
          error.response.data &&
          error.response.data.userMessage) ||
        error.userMessage ||
        error.toString();

      return thunkAPI.rejectWithValue(userMessage);
    }
  }
);

//logout user
export const logout = createAsyncThunk("user/logout", async () => {
  //call logout function
  userService.logout();
});

//user slice
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => {
      state.isUserLoading = false;
      state.isUserSuccess = false;
      state.isUserError = false;
      state.userMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(manageSignUp.pending, (state) => {
        state.isUserLoading = true;
      })
      .addCase(manageSignUp.fulfilled, (state, action) => {
        state.isUserLoading = false;
        state.isUserSuccess = true;
        state.userInfo = action.payload;
      })
      .addCase(manageSignUp.rejected, (state, action) => {
        state.isUserLoading = false;
        state.isUserError = true;
        state.userMessage = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.userInfo = null;
        state.isAdminSuccess = true;
      });
  },
});

//export slice reset function
export const { reset } = userSlice.actions;

//export the  slice
export default userSlice.reducer;
