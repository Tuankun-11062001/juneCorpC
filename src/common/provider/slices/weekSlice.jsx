import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import scheduleApi from "../../api/schedule";

const weekSlice = createSlice({
  name: "week",
  initialState: {
    loading: false,
    state: "idle",
    message: "",
    data: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getWeekThunk.pending, (state, actions) => {
      state.loading = true;
      state.state = "loading";
    }),
      builder.addCase(getWeekThunk.fulfilled, (state, actions) => {
        state.loading = false;
        state.state = "idle";
        state.message = actions.payload.message;
        state.data = actions.payload.data;
      }),
      builder.addCase(getWeekThunk.rejected, (state, actions) => {
        state.loading = false;
        state.state = "idle";
        state.message = actions.payload;
      });
  },
});

export const getWeekThunk = createAsyncThunk(
  "get_week_thunk",
  async (state, actions) => {
    const res = await scheduleApi.getWeek();
    return res;
  }
);

export default weekSlice.reducer;
