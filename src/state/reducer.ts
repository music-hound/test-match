import { combineReducers } from "@reduxjs/toolkit";
import errorReducer from "./errorSlice.ts";

const reducer = combineReducers({
  error: errorReducer,
});

export default reducer;
