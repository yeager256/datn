import { createSlice } from "@reduxjs/toolkit";
import {IUser } from "../../interfaces/type";

interface SomeState {
  user: IUser;
  isLogin: boolean;
}
const getUser = localStorage.getItem("CURRENT_USER");
const user = getUser
  ? JSON.parse(getUser):
  null;
const initialState: SomeState = {
  user: user,
  isLogin: localStorage.getItem("IS_LOGIN")
    ? JSON.parse(localStorage.getItem("IS_LOGIN")!)
    : false
};
const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, data) {
      state.user = data.payload;
      localStorage.setItem("CURRENT_USER", JSON.stringify(data.payload));
    },
    setIsLogin(state, data) {
      state.isLogin = data.payload;
    },
  },
});

export const { setUser, setIsLogin } = authReducer.actions;
export default authReducer.reducer;
