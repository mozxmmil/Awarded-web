import { createSlice } from "@reduxjs/toolkit";

export interface NavbarStateType {
  isOpen: boolean;
}

export const navbarSlice = createSlice({
  name: "navbar",
  initialState: {
    isOpen: false,
  } as NavbarStateType,

  reducers: {
    toggle: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggle } = navbarSlice.actions;
export default navbarSlice.reducer;
