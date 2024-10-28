import { createSlice } from "@reduxjs/toolkit";

import {  fetchgetAllNewItem } from "./action";
// import { RootState } from "@/type";

const initialState = {
  newItem: [],
  id: null,
};


const newSlice = createSlice({
  name: "NewItems",
  initialState,
  reducers: {
    updateSelectedId(state, action) {
      state.id = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchgetAllNewItem.fulfilled, (state, action) => {
      state.newItem = action.payload;
    });
  },
});

export const { updateSelectedId } = newSlice.actions;
export default newSlice.reducer;
