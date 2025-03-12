import { configureStore } from '@reduxjs/toolkit';
import { matchTrackerApi } from '../features/matchTrackerApi';
import { api } from "./apiSlice";

export const store = configureStore({
  reducer: { 
    [matchTrackerApi.reducerPath]: matchTrackerApi.reducer,
    [api.reducerPath]: api.reducer,
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(matchTrackerApi.middleware)
    .concat(api.middleware),

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
