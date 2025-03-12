import { combineReducers } from "@reduxjs/toolkit";
import errorReducer from "./errorSlice.ts";
import filterReducer from "./filterSlice.ts";

const reducer = combineReducers({
  error: errorReducer,
  filter: filterReducer,
});

export default reducer;
