import { createSlice } from "@reduxjs/toolkit";

const LanguageSlice = createSlice({
  name: "language",
  initialState: {
    lan: "EN",
  },
  reducers: {
    changeLan(state) {
      state.lan = state.lan === "EN" ? "TR" : "EN";
    },
  },
});

export default LanguageSlice;
export const { changeLan } = LanguageSlice.actions;
