import { createSlice } from "@reduxjs/toolkit"

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: [],
  reducers: {
    addToFavorite: (state, action) => {
      state.push(action.payload)
    },
    removeFromFavorite: (state, action) => {
      const index = state.findIndex((pokemon) => pokemon.id === action.payload.pokemonId)
      if (index !== -1) {
        state.splice(index, 1)
      }
    },
  },
})

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions
