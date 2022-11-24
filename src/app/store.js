import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "../features/card/cardSlice";

const store = configureStore({
  reducer: {
    cardReducer,
  },
});

export default store;
