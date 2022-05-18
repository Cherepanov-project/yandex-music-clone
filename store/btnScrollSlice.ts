import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitState = {
  isVisibleBtn: boolean;
};
const initialState: InitState = {
  isVisibleBtn: false,
};
const btnScrollSlice = createSlice({
  name: "btn",
  initialState,
  reducers: {
    showButton(state, action: PayloadAction<boolean>) {
      state.isVisibleBtn = action.payload;
    },
  },
});
export const { showButton } = btnScrollSlice.actions;
export default btnScrollSlice.reducer;
