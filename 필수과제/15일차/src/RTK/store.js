import { configureStore } from "@reduxjs/toolkit";
import { cartSlice, menuSlice } from "./slice";

export const store = configureStore({
  reducer: {
    setCart: cartSlice.reducer,
    menu: menuSlice.reducer,
  },
});
