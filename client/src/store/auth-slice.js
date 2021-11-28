import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false, gebruikerInfo: {} },
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.gebruikerInfo = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.gebruikerInfo = {};
      localStorage.removeItem("gebruikerInfo");
    },
  },
});

// Export alleen de functies
export const authActions = authSlice.actions;

// Export de gehele cart
export default authSlice;
