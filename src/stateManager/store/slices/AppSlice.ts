import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
  name: "root",
  initialState: {
    darkMode: false,
  },
  reducers: {
    toggleDarkMode: (state) => ({ ...state, darkMode: !state.darkMode }),
  },
});

export const { toggleDarkMode } = AppSlice.actions;
export default AppSlice;
