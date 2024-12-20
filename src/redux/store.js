import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import favoritesReducer from "./favoritesSlice";
import uiReducer from "./uiSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer,
    ui: uiReducer,
  },
});

export default store;
