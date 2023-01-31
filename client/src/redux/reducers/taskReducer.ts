import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError, AxiosResponse } from "axios";
import { Task, User } from "../../types/common";
import { axiosInstance, rqHeader } from "../shared/sharedInstance";
import { TaskReducer } from "../../types/task";

// Fetch all tasks from API
export const fetchAllTasks = createAsyncThunk("fetchAllTasks", async (params: { id: string; token: string }) => {
  try {
    const res: AxiosResponse<Task[] | Error, any> = await axiosInstance.get("tasks/all", rqHeader(params.token));
    if (!(res.data instanceof Error)) return res.data;
  } catch (e) {
    return;
  }
});

// Fetch single task, use const task = await fetchSingleTask({id: id, token: token})
export const fetchSingleTask = createAsyncThunk("fetchSingleTask", async (params: { id: string; token: string }) => {
  try {
    const res: AxiosResponse<Task | Error, any> = await axiosInstance.get(`tasks/${params.id}`, rqHeader(params.token));
    if (!(res.data instanceof Error)) return res.data;
  } catch (e) {
    return;
  }
});

// Post a new task
export const addTask = createAsyncThunk("addTask", async (params: { task: Task; token: string }) => {
  try {
    const res: AxiosResponse<Task | Error, any> = await axiosInstance.post(`tasks/`, rqHeader(params.token));
    if (!(res.data instanceof Error)) return res.data;
  } catch (e) {
    return;
  }
});

// Delete task
export const deleteTask = createAsyncThunk("delete", async (params: { id: string; token: string }) => {
  try {
    const res: AxiosResponse<Task | Error, any> = await axiosInstance.delete(`tasks/${params.id}`, rqHeader(params.token));
    if (!(res.data instanceof Error)) return res.data;
  } catch (e) {
    return;
  }
});

// PUT task
export const updateTask = createAsyncThunk("delete", async (params: { id: string; token: string }) => {
  try {
    const res: AxiosResponse<Task | Error, any> = await axiosInstance.delete(`tasks/${params.id}`, rqHeader(params.token));
    if (!(res.data instanceof Error)) return res.data;
  } catch (e) {
    return;
  }
});

const taskSlice = createSlice({
  name: "taskSlice",
  initialState: { allTasks: [] } as unknown as TaskReducer,
  reducers: {},

  extraReducers: (build) => {
    build
      .addCase(fetchAllTasks.fulfilled, (state, action) => {
        if (action.payload instanceof AxiosError || !action.payload) {
          // handling fetching error
          console.log("There is something wrong when fetching data. Please refresh the page.");
          return state;
        } else return { allTasks: action.payload };
      })

      .addCase(addTask.fulfilled, (state, action) => {
        if (action.payload instanceof AxiosError || !action.payload) {
          console.log("There is something wrong when fetching data. Please refresh the page.");
          return state;
        } else return { ...state, allTasks: [...state.allTasks, action.payload] };
      })

      .addCase(deleteTask.fulfilled, (state, action) => {
        if (action.payload instanceof AxiosError || !action.payload) {
          console.log("There is something wrong when fetching data. Please refresh the page.");
          return state;
        } else {
          const filteredTask = state.allTasks.filter((task: Task) => task.id !== action.payload?.id);
          return { allTasks: filteredTask };
        }
      })

      .addCase(updateTask.fulfilled, (state, action) => {
        if (action.payload instanceof AxiosError || !action.payload) {
          console.log("There is something wrong when fetching data. Please refresh the page.");
          return state;
        } else {
          const data: Task = action.payload;
          const newAllTasks = state.allTasks.map((task) => {
            if (task.id === data.id) {
              return data;
            }
            return task;
          });
          return { ...state, newAllTasks };
        }
      });
  },
});

export const taskReducer = taskSlice.reducer;
// export const {} = userSlice.actions;
