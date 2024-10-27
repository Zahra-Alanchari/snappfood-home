import { createSlice } from "@reduxjs/toolkit";

import { fetchgetAllSpecialTaste } from "./action";
// import { RootState } from "@/type";

const initialState = {
  specialTaste: [],
  id: null,
};

const specialTasteSlice = createSlice({
  name: "SpecialTastes",
  initialState,
  reducers: {
    updateSelectedId(state, action) {
      state.id = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchgetAllSpecialTaste.fulfilled, (state, action) => {
      state.specialTaste = action.payload;
    });
  },
});

export const { updateSelectedId } = specialTasteSlice.actions;
export default specialTasteSlice.reducer;
