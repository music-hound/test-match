import { configureStore } from '@reduxjs/toolkit';
import { matchTrackerApi } from '../features/matchTrackerApi';
import reducer from './reducer'

export const store = configureStore({
  reducer: { 
    reducer,
    [matchTrackerApi.reducerPath]: matchTrackerApi.reducer,
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(matchTrackerApi.middleware),

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
