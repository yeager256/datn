import { createSlice } from "@reduxjs/toolkit";

interface SomeState {
}

const cartLocal = sessionStorage.getItem("CART");

const initialState: SomeState = {
  cart: cartLocal ? JSON.parse(cartLocal) : [],
};
const appReducer = createSlice({
  name: "app",
  initialState,
  reducers: {
    
    test(state){
     
    }
  },
});

export const {
  test
} = appReducer.actions;
export default appReducer.reducer;
