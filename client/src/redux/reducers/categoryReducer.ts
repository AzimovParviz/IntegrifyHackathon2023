import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError, AxiosResponse } from "axios";
import { CategoryReducer } from "../../types/category";
import { Category } from "../../types/common";
import { axiosInstance, rqHeader } from "../shared/sharedInstance";

// Fetch all categories from API
export const fetchAllCategories = createAsyncThunk("fetchAllCategories", async (token: string) => {
  try {
    const res: AxiosResponse<Category[] | Error, any> = await axiosInstance.get("categories/all", rqHeader(token));
    if (!(res.data instanceof Error)) return res.data;
  } catch (e) {
    return;
  }
});

// Fetch single category, use const category = await fetchSingleCategory({id: id, token: token})
export const fetchSingleCategory = createAsyncThunk("fetchSingleCategory", async (params: { id: string; token: string }) => {
  try {
    const res: AxiosResponse<Category | Error, any> = await axiosInstance.get(`categories/${params.id}`, rqHeader(params.token));
    if (!(res.data instanceof Error)) return res.data;
  } catch (e) {
    return;
  }
});

// dispatch(addCategory({category: category, token: token}))
// Post a new category
export const addCategory = createAsyncThunk("addCategory", async (params: { category: Category; token: string }) => {
  try {
    const res: AxiosResponse<Category | Error, any> = await axiosInstance.post(`categories/`, rqHeader(params.token));
    if (!(res.data instanceof Error)) return res.data;
  } catch (e) {
    return;
  }
});

// Delete category
export const deleteCategory = createAsyncThunk("deleteCategory", async (params: { id: string; token: string }) => {
  try {
    const res: AxiosResponse<Category | Error, any> = await axiosInstance.delete(`categories/${params.id}`, rqHeader(params.token));
    if (!(res.data instanceof Error)) return res.data;
  } catch (e) {
    return;
  }
});

// PUT category
export const updateCategory = createAsyncThunk("updateCategory", async (params: { id: string; token: string }) => {
  try {
    const res: AxiosResponse<Category | Error, any> = await axiosInstance.delete(`categories/${params.id}`, rqHeader(params.token));
    if (!(res.data instanceof Error)) return res.data;
  } catch (e) {
    return;
  }
});

const categorySlice = createSlice({
  name: "categorySlice",
  initialState: { allCategory: [] } as unknown as CategoryReducer,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(fetchAllCategories.fulfilled, (state, action) => {
        if (action.payload instanceof AxiosError || !action.payload) {
          // handling fetching error
          console.log("There is something wrong when fetching data. Please refresh the page.");
          return state;
        } else return { allCategories: action.payload };
      })

      .addCase(addCategory.fulfilled, (state, action) => {
        if (action.payload instanceof AxiosError || !action.payload) {
          console.log("There is something wrong when fetching data. Please refresh the page.");
          return state;
        } else return { ...state, allCategories: [...state.allCategories, action.payload] };
      })

      .addCase(deleteCategory.fulfilled, (state, action) => {
        if (action.payload instanceof AxiosError || !action.payload) {
          console.log("There is something wrong when fetching data. Please refresh the page.");
          return state;
        } else {
          const filteredCategory = state.allCategories.filter((category: Category) => category.id !== action.payload?.id);
          return { allCategories: filteredCategory };
        }
      })

      .addCase(updateCategory.fulfilled, (state, action) => {
        if (action.payload instanceof AxiosError || !action.payload) {
          console.log("There is something wrong when fetching data. Please refresh the page.");
          return state;
        } else {
          const data: Category = action.payload;
          const newAllCategories = state.allCategories.map((category) => {
            if (category.id === data.id) {
              return data;
            }
            return category;
          });
          return { ...state, newAllCategories };
        }
      });
  },
});

export const categoryReducer = categorySlice.reducer;
// export const {} = categorySlice.actions;
