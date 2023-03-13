import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Pull items from global store
export const selectItems = (state) => state.basket.items;
// Get sub total of the cart items
export const selectTotal = (state) =>
  state.basket.items.reduce((total, currValue) => {
    return total + currValue.price;
  }, 0);

export default basketSlice.reducer;
