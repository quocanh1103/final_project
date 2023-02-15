import { configureStore } from "@reduxjs/toolkit";
import { CheckLoginSlice } from "../components/Reducer/checklogin/CheckLogin";
import { CartSlice } from "../components/Reducer/ReducerCart";

const store = configureStore({
  reducer: {
    checklogin: CheckLoginSlice.reducer,
    reducercart: CartSlice.reducer,
  },
});

export default store;
