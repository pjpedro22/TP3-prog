import { createSlice } from "@reduxjs/toolkit";
import reducers from './favoritesReducers';

const initialState = {
  favorites: [],
}

export const favoriteSlice = createSlice({
  
  name: 'favorites',
  initialState,
  reducers: reducers,
})

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;