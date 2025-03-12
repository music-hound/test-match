import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: { filterSelect : ''},
  reducers: {
    filterChange: (state, action: PayloadAction<string>) => {
        state.filterSelect = action.payload
    }
  },
});

export const { filterChange } = filterSlice.actions;
export default filterSlice.reducer;
