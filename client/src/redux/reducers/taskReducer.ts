import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError, AxiosResponse } from "axios";
import { User } from "../../types/common";
import { axiosInstance } from "../shared/sharedInstance";
import { TaskReducer } from "../../types/task";

// Fetch all users from API
export const fetchAllUsers = createAsyncThunk("fetchAllTasks", async () => {
	try {
		const res: AxiosResponse<User[] | Error, any> = await axiosInstance.get("tasks");
		if (!(res.data instanceof Error)) return res.data;
	} catch (e) {
		return;
	}
});

const taskSlice = createSlice({
	name: "taskSlice",
	initialState: { allTasks: [] } as unknown as TaskReducer,
	reducers: {
    
	},
});

export const taskReducer = taskSlice.reducer;
// export const {} = userSlice.actions;
