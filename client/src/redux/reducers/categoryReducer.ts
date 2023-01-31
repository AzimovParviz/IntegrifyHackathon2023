import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError, AxiosResponse } from "axios";
import { CategoryReducer } from "../../types/category";
import { Category } from "../../types/common";
import { axiosInstance } from "../shared/sharedInstance";

// Fetch all categorys from API
export const fetchAllcategorys = createAsyncThunk("fetchAllCategorys", async () => {
	try {
		const res: AxiosResponse<Category[] | Error, any> = await axiosInstance.get("categorys");
		if (!(res.data instanceof Error)) return res.data;
	} catch (e) {
		return;
	}
});

const categorySlice = createSlice({
	name: "categorySlice",
	initialState: { allCategory: [] } as unknown as CategoryReducer,
	reducers: {
    
	},
});

export const categoryReducer = categorySlice.reducer;
// export const {} = categorySlice.actions;
