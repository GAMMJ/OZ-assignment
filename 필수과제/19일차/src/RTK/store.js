import { configureStore } from "@reduxjs/toolkit"
import { pokemontSlice } from "./slice"
import { favoriteSlice } from "./favoriteSlice"

export const store = configureStore({
  reducer: {
    pokemon: pokemontSlice.reducer,
    favorite: favoriteSlice.reducer,
  },
})
