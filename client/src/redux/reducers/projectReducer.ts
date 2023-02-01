import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError, AxiosResponse } from "axios";
import { ProjectReducer } from "../../types/project";
import { Project } from "../../types/common";
import { axiosInstance, rqHeader } from "../shared/sharedInstance";

// Fetch all projects from API
export const fetchAllprojects = createAsyncThunk("fetchAllProjects", async () => {
  try {
    const res: AxiosResponse<Project[] | Error, any> = await axiosInstance.get("projects");
    if (!(res.data instanceof Error)) return res.data;
  } catch (e) {
    console.log(e);
    
    return;
  }
});

// Fetch single project, use const project = await fetchSingleProject({id: id, token: token})
export const fetchSingleProject = createAsyncThunk("fetchSingleProject", async (params: { id: string }) => {
  try {
    const res: AxiosResponse<Project | Error, any> = await axiosInstance.get(`projects/${params.id}`);
    if (!(res.data instanceof Error)) return res.data;
  } catch (e) {
    return;
  }
});

// Post a new project
export const addProject = createAsyncThunk("addProject", async (params: { project: any }) => {
  try {
    const res: AxiosResponse<Project | Error, any> = await axiosInstance.post("projects/");
    if (!(res.data instanceof Error)) return res.data;
  } catch (e) {
    return;
  }
});

// Delete project
export const deleteProject = createAsyncThunk("deleteProject", async (id: any ) => {
  try {
    const res: AxiosResponse<Project | Error, any> = await axiosInstance.delete(`projects/${id}`);
    if (!(res.data instanceof Error)) return res.data;
  } catch (e) {
    return;
  }
});

// PUT project
export const updateProject = createAsyncThunk("updateProject", async (params: { id: string; token: string }) => {
  try {
    const res: AxiosResponse<Project | Error, any> = await axiosInstance.delete(`projects/${params.id}`, rqHeader(params.token));
    if (!(res.data instanceof Error)) return res.data;
  } catch (e) {
    return;
  }
});

const projectSlice = createSlice({
  name: "projectSlice",
  initialState: { allProject: [] } as unknown as ProjectReducer,
  reducers: {},

  extraReducers: (build) => {
    build
      .addCase(fetchAllprojects.fulfilled, (state, action) => {
        if (action.payload instanceof AxiosError || !action.payload) {
          // handling fetching error
          console.log("There is something wrong when fetching data. Please refresh the page.");
          return state;
        } else return { allProjects: action.payload };
      })

      .addCase(addProject.fulfilled, (state, action) => {
        if (action.payload instanceof AxiosError || !action.payload) {
          console.log("There is something wrong when fetching data. Please refresh the page.");
          return state;
        } else return { ...state, allProjects: [...state.allProjects, action.payload] };
      })

      .addCase(deleteProject.fulfilled, (state, action) => {
        if (action.payload instanceof AxiosError || !action.payload) {
          console.log("There is something wrong when fetching data. Please refresh the page.");
          return state;
        } else {
          const filteredProject = state.allProjects.filter((project: Project) => project.id !== action.payload?.id);
          return { allProjects: filteredProject };
        }
      })

      .addCase(updateProject.fulfilled, (state, action) => {
        if (action.payload instanceof AxiosError || !action.payload) {
          console.log("There is something wrong when fetching data. Please refresh the page.");
          return state;
        } else {
          const data: Project = action.payload;
          const newAllProjects = state.allProjects.map((project) => {
            if (project.id === data.id) {
              return data;
            }
            return project;
          });
          return { ...state, newAllProjects };
        }
      });
  },
});

export const projectReducer = projectSlice.reducer;
// export const {} = projectSlice.actions;
