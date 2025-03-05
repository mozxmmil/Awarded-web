import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
  "user/fetchUer",
  async (fetchId: string, { rejectWithValue }) => {
    try {
      const responce = await fetch(fetchId);

      const results = await responce.json();
      return results
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
