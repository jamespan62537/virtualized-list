import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: {
    cardContentList: [],
    hasNextPage: false,
    isNextPageLoading: false,
  },
  reducers: {
    loadingHandlerAction(state, action) {
      if (action.payload) {
        state.isNextPageLoading = true;
      } else {
        state.hasNextPage = true;
        state.isNextPageLoading = false;
      }
    },
    setCardContentListAction(state, action) {
      state.cardContentList = [...state.cardContentList, ...action.payload];
    },
  },
});

export const { loadingHandlerAction, setCardContentListAction } =
  cardSlice.actions;
export default cardSlice.reducer;
