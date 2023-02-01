import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError, AxiosResponse } from "axios";
import { UserAuth, UserReducer } from "../../types/user";
import { User } from "../../types/common";
import { axiosInstance } from "../shared/sharedInstance";

// Fetch all users from API
export const loginUser = createAsyncThunk("loginUser", async (credential: string) => {
  try {
    const res: AxiosResponse<UserAuth | Error, any> = await axiosInstance.post("login/auth");
    if (!(res.data instanceof Error)) return res.data;
  } catch (e) {
    return;
  }
});

// Signup the users from API
export const signupUser = createAsyncThunk("signupUser", async (credential: string) => {
  try {
    const res: AxiosResponse<UserAuth | Error, any> = await axiosInstance.post("login/signup");
    if (!(res.data instanceof Error)) return res.data;
  } catch (e) {
    return;
  }
});

const userSlice = createSlice({
  name: "userSlice",
  initialState: { currentUser: undefined, allUser: [] } as UserReducer,
  reducers: {},

  extraReducers: (build) => {
    build
      .addCase(loginUser.fulfilled, (state, action) => {
        if (action.payload instanceof AxiosError || !action.payload) {
          console.log("There is something wrong when fetching data. Please refresh the page.");
          return state;
        } else {
          const currentUser = action.payload.user;
          return { ...state, currentUser: currentUser };
        }
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        if (action.payload instanceof AxiosError || !action.payload) {
          console.log("There is something wrong when fetching data. Please refresh the page.");
          return state;
        } else {
          const currentUser = action.payload.user;
          return { ...state, currentUser: currentUser };
        }
      });
  },
});

export const userReducer = userSlice.reducer;
// export const {} = userSlice.actions;
