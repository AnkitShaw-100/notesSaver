import { configureStore } from "@reduxjs/toolkit";
import pasteReducer from "../src/redux/pasteSlice"; // Ensure this file exists

export const store = configureStore({
  reducer: {
    paste: pasteReducer, // Match this key with `useSelector`
  },
});
