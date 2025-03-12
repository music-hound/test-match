import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const errorSlice = createSlice({
  name: "errorSlice",
  initialState: { isOffline : false },
  reducers: {
    toggle_error: (state, action: PayloadAction<boolean>) => {
      state.isOffline = action.payload
    }
  },
});

export const { toggle_error } = errorSlice.actions;
export default errorSlice.reducer;
