import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface uiState {
  isCreated: boolean;
}

const uiInitialState: uiState = {
  isCreated: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    setCreated: (state, action: PayloadAction<boolean>) => ({
      ...state,
      isCreated: action.payload,
    }),
  },
});

export const { setCreated } = uiSlice.actions;

export default uiSlice.reducer;
