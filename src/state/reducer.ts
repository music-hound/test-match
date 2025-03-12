import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";

const reducer = combineReducers({
  theme: themeReducer,
});

export default reducer;
