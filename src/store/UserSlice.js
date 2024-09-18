import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      name: "Ahmet Güneş",
    },
  },
  reducers: {
    updateUserInfo(state, action) {
      state.userInfo = action.payload;
    },
  },
});

export default UserSlice;
export const { updateUserInfo } = UserSlice.actions;
