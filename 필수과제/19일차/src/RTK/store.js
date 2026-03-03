import { configureStore } from "@reduxjs/toolkit"
import { pokemonSlice } from "./slice"
import { favoriteSlice } from "./favoriteSlice"

export const store = configureStore({
  reducer: {
    pokemon: pokemonSlice.reducer,
    favorite: favoriteSlice.reducer,
  },
})
