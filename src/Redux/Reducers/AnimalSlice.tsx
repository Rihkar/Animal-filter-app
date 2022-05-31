import { createSlice } from '@reduxjs/toolkit';
import { animalListType } from '../../Data/AnimalList';

export const AnimalSlice = createSlice({
  name: 'AnimalSlice',
  initialState: {
    animalsList: JSON.parse(localStorage.getItem('animals') || '[]') as animalListType[],
  },
  reducers: {
    addAnimal: (state, action) => {
      const animals = [...state.animalsList, action.payload];
      localStorage.setItem('animals', JSON.stringify(animals));
      state.animalsList = animals;
    },
  },
});

export const {
  addAnimal,
} = AnimalSlice.actions;

export default AnimalSlice.reducer;
