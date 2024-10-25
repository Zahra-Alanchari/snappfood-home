import { createSlice } from "@reduxjs/toolkit";

import { fetchgetAllProduct } from "./action";
// import { RootState } from "@/type";

const initialState = {
  product: [],
  id: null,
};


const productSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    updateSelectedId(state, action) {
      state.id = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchgetAllProduct.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  },
});


export const { updateSelectedId } = productSlice.actions;
export default productSlice.reducer;
