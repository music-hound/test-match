// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { matchTrackerApi } from '../features/matchTrackerApi'; // Импортируем наш API
import reducer from './reducer'; // Импортируем стандартный редьюсер

// Создаем store, комбинируя редьюсеры
export const store = configureStore({
  reducer: {
    // Ваш основной редьюсер
    reducer, 
    
    // Редьюсер для matchTrackerApi
    [matchTrackerApi.reducerPath]: matchTrackerApi.reducer,
  },
  
  // Добавляем middleware для matchTrackerApi
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(matchTrackerApi.middleware),
});

// Типы для state и dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
