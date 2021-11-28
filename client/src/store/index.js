import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import cartSlice from "./cart-slice";

// configureer de store met alle slices.

const store = configureStore({
  reducer: { auth: authSlice.reducer, cart: cartSlice.reducer },
});

export default store;
