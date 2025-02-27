import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducers/counterSlice";
import  navbarSlice  from "./reducers/navbarSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    navbar: navbarSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
