import { configureStore } from '@reduxjs/toolkit';
import AnimalSlice from './Reducers/AnimalSlice';

export const store = configureStore({
  reducer: {
    animals: AnimalSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
