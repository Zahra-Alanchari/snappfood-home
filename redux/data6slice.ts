import { createSlice } from "@reduxjs/toolkit";

import { fetchgetAllFreeDelivery } from "./action";
// import { RootState } from "@/type";

const initialState = {
  freeDelivery: [],
  id: null,
};

const freeDeliverySlice = createSlice({
  name: "FreeDeliverys",
  initialState,
  reducers: {
    updateSelectedId(state, action) {
      state.id = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchgetAllFreeDelivery.fulfilled, (state, action) => {
      state.freeDelivery = action.payload;
    });
  },
});

export const { updateSelectedId } = freeDeliverySlice.actions;
export default freeDeliverySlice.reducer;
