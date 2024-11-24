import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../slice/postsSlice";
import uiReducer from "../slice/uiSlice";

export const store = configureStore({
  reducer: {
    postsState: postReducer,
    uiState: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
