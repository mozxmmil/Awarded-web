import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { fetchUser } from "../actions/userAction";

interface Usertype {
  id?: number;
  name?: string;
  title?: string;
}

type UserDatatype = {
  user: Usertype[];
  loading: boolean;
  error: string | null;
};

const initialState: UserDatatype = {
  user: [],
  loading: false,
  error: "",
};
const useSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    removeUser: (state, action: PayloadAction<number>) => {
      state.user = state.user.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<UserDatatype>) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      console.log(action.payload);
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.error as string;
    });
  },
});

export const { removeUser } = useSlice.actions;
export default useSlice.reducer;
