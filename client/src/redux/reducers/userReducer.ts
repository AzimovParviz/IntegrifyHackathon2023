import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError, AxiosResponse } from "axios";
import axiosInstance from "../../test/shared/sharedInstance";
import { Product } from "../../types/common";
import { AccountCredential, SessionCredential, User, UserReducer } from "../../types/user";

// Fetch all users from API
export const fetchAllUsers = createAsyncThunk("fetchAllUsers", async () => {
  try {
    const res: AxiosResponse<User[] | Error, any> = await axiosInstance.get("users");
    if (!(res.data instanceof Error)) return res.data;
  } catch (e) {
    return;
  }
});

// Sign up a user + testing params. Should work like props
export const addUser = createAsyncThunk("addUser", async (params: {user: User, isRememberMe: boolean}) => {
  console.log("user", params.user)
  try {
    const res: AxiosResponse<User | Error, any> = await axiosInstance.post("users", {
      name: params.user.name,
      email: params.user.email,
      password: params.user.password,
      avatar: params.user.avatar
    });
    if (!(res.data instanceof Error)) {
      if (params.isRememberMe) localStorage.setItem("user", JSON.stringify(res.data));
      return res.data;
    }
  } catch (e) {
    return;
  }
});

// User Auth - API not working atm
export const authCredential = createAsyncThunk("authCredential", async (params: {account: AccountCredential, isRememberMe: boolean}, { dispatch }) => {
  try {
   
});

// LOGIN & Get user's profile
export const loginUser = createAsyncThunk("loginUser", async (params: {access_token: string, isRememberMe: boolean}) => {
  try {
   
});

// Update User
export const updateUser = createAsyncThunk("updateUser", async (user: User) => {
  try {
    
});

// Validate emails
export const validateEmail = createAsyncThunk("validateUser", async (email: string) => {
  try {
    
})

const userSlice = createSlice({
  name: "userSlice",
  initialState: { userList: [], specialOffers: undefined } as UserReducer,
  reducers: {
    makeSpecialOffersForUser: (state, action) => {
      // Randomize special offers
      if (!state.specialOffers && action.payload.length > 0) {
        const allProducts = action.payload;
        let tempArray: Product[] = [];
        let randomIndex: number[] = [];
        for (let i = 0; i < 5; i++) {
          let rI = Math.floor(Math.random() * 100); //Some data after #100 is broken
          randomIndex.push(rI);
        }
        randomIndex.forEach((index) => tempArray.push(allProducts[index]));
        console.log("TempArray", tempArray);
        return {...state, specialOffers: tempArray}
      }
      return state;
    },
    clearEmailCheck: (state) => {
      if (state.isAvailable !== undefined) {
        delete state.isAvailable
      }
    },
    logOutCurrentUser:(state) => {
      if (state.currentUser !== undefined) {
        delete state.currentUser;
        console.log("state", state);
      }
    }

  },
  extraReducers: (build) => {
    build
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        console.log("fetch-all-user");
        if (action.payload instanceof AxiosError || !action.payload) return state;
        else {
          return { ...state, userList: action.payload };
        }
      })

      .addCase(addUser.fulfilled, (state, action) => {
        if (action.payload instanceof AxiosError || !action.payload) return state;
        else {
          return { ...state, currentUser: action.payload };
        }
      })

      .addCase(authCredential.fulfilled, (state, action) => {
        if (action.payload instanceof AxiosError || !action.payload || !state) return state;
        else return { ...state, session: action.payload };
      })

      .addCase(loginUser.fulfilled, (state, action) => {
        if (action.payload instanceof AxiosError || !action.payload || !state) return state;
        else {
          return { ...state, currentUser: action.payload }
        };
      })

      .addCase(updateUser.fulfilled, (state, action) => {

      })

      .addCase(validateEmail.fulfilled, (state, action) => {
        if (action.payload instanceof AxiosError || !action.payload || !state) return state;
        else return { ...state, ...action.payload };
      })
  },
});

export const userReducer = userSlice.reducer;
export const { makeSpecialOffersForUser, clearEmailCheck, logOutCurrentUser } = userSlice.actions;
