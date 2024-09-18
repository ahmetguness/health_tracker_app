import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import LanguageSlice from "./LanguageSlice";

const store = configureStore({
  reducer: {
    user: UserSlice.reducer,
    language: LanguageSlice.reducer,
  },
});

export default store;
