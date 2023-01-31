import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError, AxiosResponse } from "axios";
import { Task, User } from "../../types/common";
import { axiosInstance } from "../shared/sharedInstance";
import { TaskReducer } from "../../types/task";

// Fetch all tasks from API
export const fetchAllTasks = createAsyncThunk("fetchAllTasks", async () => {
	try {
		const res: AxiosResponse<Task[] | Error, any> = await axiosInstance.get("tasks");
		if (!(res.data instanceof Error)) return res.data;
	} catch (e) {
		return;
	}
});

// Fetch single

const taskSlice = createSlice({
	name: "taskSlice",
	initialState: { allTasks: [] } as unknown as TaskReducer,
	reducers: {
    
	},

	extraReducers: (build) => {
		build
			.addCase(fetchAllTasks.fulfilled, (state, action) => {
				console.log("Task reducer initiate");
				if (action.payload instanceof AxiosError || !action.payload ) {
					// handling fetching error
					console.log("There is something wrong when fetching data. Please refresh the page.");
					return state;
				} else return { ...state, allTasks: action.payload };
			});
	}
});

export const taskReducer = taskSlice.reducer;
// export const {} = userSlice.actions;
