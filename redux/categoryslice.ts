import { createSlice } from "@reduxjs/toolkit";

import { fetchgetAllCategory } from "./action";
// import { RootState } from "@/type";

const initialState = {
  item: [],
  id: null,
};


const categorySlice = createSlice({
  name: "Categories",
  initialState,
  reducers: {
    updateSelectedId(state, action) {
      state.id = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchgetAllCategory.fulfilled, (state, action) => {
      state.item = action.payload;
    });
  },
});

export const { updateSelectedId } = categorySlice.actions;
export default categorySlice.reducer;
