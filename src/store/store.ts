import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducers/counterSlice";
import navbarSlice from "./reducers/navbarSlice";
import useSlice from "./reducers/userData";
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    navbar: navbarSlice,
    userData: useSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
