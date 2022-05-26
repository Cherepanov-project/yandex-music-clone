import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitState = {
    errorSubmitForm: boolean;
};
const initialState: InitState = {
   errorSubmitForm: false,
}
const formErrorSlice = createSlice({
    name: "errorForm",
    initialState,
    reducers: {
        showError(state, action: PayloadAction<boolean>) {
            state.errorSubmitForm = action.payload;
        }
    }
})
export const { showError } = formErrorSlice.actions;
export default formErrorSlice.reducer;