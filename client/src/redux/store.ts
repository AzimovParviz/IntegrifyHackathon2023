import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { projectReducer } from "./reducers/projectReducer";
import { userReducer } from "./reducers/userReducer";
import { categoryReducer } from "./reducers/categoryReducer";
import { taskReducer } from "./reducers/taskReducer";


export const store = configureStore({
  reducer: {
    projectReducer,
    userReducer,
    categoryReducer,
    taskReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
