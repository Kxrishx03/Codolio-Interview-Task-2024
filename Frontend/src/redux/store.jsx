import { configureStore, combineReducers } from '@reduxjs/toolkit';
import themeSlice from './themeSlice';
import transactionSlice from './transactionSlice';

// Combine reducers
const rootReducer = combineReducers({
  transaction: transactionSlice,
  themeKey: themeSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Optional: Adjust if needed
    }),
});


