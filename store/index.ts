import { configureStore } from "@reduxjs/toolkit";
import btnScrollReducer from "./btnScrollSlice";
import formErrorReducer from './formErrorSlice';

const store = configureStore({
  reducer: {
    showBtn: btnScrollReducer,
    showErr: formErrorReducer,
  },
 
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
