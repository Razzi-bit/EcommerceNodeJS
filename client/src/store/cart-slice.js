import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id); // Check of je een match hebt
      state.totalQuantity++;
      state.totalAmount += newItem.prijs;
      state.totalAmount.toFixed(2);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          naam: newItem.naam,
          prijs: newItem.prijs,
          quantity: 1,
          totalPrice: newItem.prijs,
          image: newItem.image,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.prijs;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => id === item.id);
      state.totalQuantity--;
      state.totalAmount -= existingItem.prijs;
      state.totalAmount.toFixed(2);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id); // loop over de array en return elk item dat niet matched met het gegeven id.
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.prijs;
      }
    },
    clearCart(state, action) {
      state.items = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
    },
  },
});

// Export alleen de functies
export const cartActions = cartSlice.actions;

// Export de gehele cart
export default cartSlice;
