import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const errorSlice = createSlice({
  name: "errorSlice",
  initialState: false,
  reducers: {
    toggle_error: (_state, action: PayloadAction<boolean>) => action.payload
  },
});

export const { toggle_error } = errorSlice.actions;
export default errorSlice.reducer;
