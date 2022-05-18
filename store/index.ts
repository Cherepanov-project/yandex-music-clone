import { configureStore } from "@reduxjs/toolkit";
import btnScrollReducer from "./btnScrollSlice";

const store = configureStore({
  reducer: {
    showBtn: btnScrollReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
