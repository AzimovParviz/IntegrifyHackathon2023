import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError, AxiosResponse } from "axios";
import { ProjectReducer } from "../../types/project";
import { Project } from "../../types/common";
import { axiosInstance } from "../shared/sharedInstance";

// Fetch all projects from API
export const fetchAllprojects = createAsyncThunk("fetchAllProjects", async () => {
	try {
		const res: AxiosResponse<Project[] | Error, any> = await axiosInstance.get("projects");
		if (!(res.data instanceof Error)) return res.data;
	} catch (e) {
		return;
	}
});

const projectSlice = createSlice({
	name: "projectSlice",
	initialState: { allProject: [] } as unknown as ProjectReducer,
	reducers: {
    
	},
});

export const projectReducer = projectSlice.reducer;
// export const {} = projectSlice.actions;
