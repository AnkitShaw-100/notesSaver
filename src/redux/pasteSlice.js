import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

export const pasteSlice = createSlice({
  name: 'pastes',
  initialState,
  reducers: {
    addtoPastes: (state, action) => {},
    updateToPastes: (state, action) => {},
    restAllPastes: (state, action) => {},
    removeFromPastes: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const { addtoPastes, updateToPastes, restAllPastes, removeFromPastes } =
  counterSlice.actions;

export default counterSlice.reducer;
