import { createSlice } from "@reduxjs/toolkit";
import type { Dispatch, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, incrementByAmount, reset } =
  counterSlice.actions;

export const asyncReset = () => (dispatch: Dispatch) => {
  setTimeout(() => {
    dispatch(reset());
  }, 2000);
};

export default counterSlice.reducer;
