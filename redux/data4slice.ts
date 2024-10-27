import { createSlice } from "@reduxjs/toolkit";

import {  fetchgetAllGiftItem } from "./action";
// import { RootState } from "@/type";

const initialState = {
  giftItem: [],
  id: null,
};


const giftSlice = createSlice({
  name: "GiftItems",
  initialState,
  reducers: {
    updateSelectedId(state, action) {
      state.id = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchgetAllGiftItem.fulfilled, (state, action) => {
      state.giftItem = action.payload;
    });
  },
});

export const { updateSelectedId } = giftSlice.actions;
export default giftSlice.reducer;
