import { createAsyncThunk, createSlice } from "reduxjs/toolkit";
import { AxiosError, AxiosResponse } from "axios";
import { UserReducer } from "../../types/user";
import { User } from "../../types/common";
import { axiosInstance } from "../shared/sharedInstance";

// Fetch all users from API
export const fetchAllUsers = createAsyncThunk("fetchAllUsers", async () => {
  try {
    const res: AxiosResponse<User[] | Error, any> = await axiosInstance.get("users");
    if (!(res.data instanceof Error)) return res.data;
  } catch (e) {
    return;
  }
});

const userSlice = createSlice({
  name: "userSlice",
  initialState: { currentUser: undefined, allUser: [] } as UserReducer,
  reducers: {
    
  },
});

export const userReducer = userSlice.reducer;
export const { makeSpecialOffersForUser, clearEmailCheck, logOutCurrentUser } = userSlice.actions;
