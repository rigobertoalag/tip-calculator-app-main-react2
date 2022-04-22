import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import tipReducer from '../features/tip/tipSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tip: tipReducer
  },
});
