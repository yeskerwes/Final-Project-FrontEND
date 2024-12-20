import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isCartModalOpen: false,
    isFavoritesModalOpen: false,
  },
  reducers: {
    toggleCartModal: (state) => {
      state.isCartModalOpen = !state.isCartModalOpen;
    },
    toggleFavoritesModal: (state) => {
      state.isFavoritesModalOpen = !state.isFavoritesModalOpen;
    },
  },
});

export const { toggleCartModal, toggleFavoritesModal } = uiSlice.actions;
export default uiSlice.reducer;
