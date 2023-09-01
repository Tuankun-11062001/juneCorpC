import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import scheduleApi from "../../api/schedule";
import { actionNotification } from "./actionSlice";

const scheduleSlice = createSlice({
  initialState: {
    loading: false,
    state: "idle",
    message: "",
    data: {
      morning: [],
      afternoon: [],
      evenning: [],
    },
    today: {
      morning: [],
      afternoon: [],
      evenning: [],
    },
  },
  name: "schedule",
  reducers: {
    addSchedule: (state, actions) => {
      switch (actions.payload.session) {
        case "morning":
          state.data.morning.push(actions.payload);
          break;
        case "afternoon":
          state.data.afternoon.push(actions.payload);
          break;
        case "evenning":
          state.data.evenning.push(actions.payload);
          break;
      }
    },
    editScheduleToday: (state, actions) => {
      switch (actions.payload.session) {
        case "morning":
          state.today.morning[actions.payload.i] = actions.payload;
          break;
        case "afternoon":
          state.today.afternoon[actions.payload.i] = actions.payload;
          break;
        case "evenning":
          state.today.evenning[actions.payload.i] = actions.payload;
          break;
      }
    },
    editSchedule: (state, actions) => {
      switch (actions.payload.session) {
        case "morning":
          state.data.morning[actions.payload.i] = actions.payload;
          break;
        case "afternoon":
          state.data.afternoon[actions.payload.i] = actions.payload;
          break;
        case "evenning":
          state.data.evenning[actions.payload.i] = actions.payload;
          break;
      }
    },
    deleteSchedule: (state, actions) => {
      switch (actions.payload.session) {
        case "morning":
          state.data.morning.splice(actions.payload.i, 1);
          break;
        case "afternoon":
          state.data.afternoon.splice(actions.payload.i, 1);
          break;
        case "evenning":
          state.data.evenning.splice(actions.payload.i, 1);
          break;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(saveAllScheduleThunk.pending, (state, actions) => {
      state.loading = true;
      state.state = "loading";
    }),
      builder.addCase(saveAllScheduleThunk.fulfilled, (state, actions) => {
        state.loading = false;
        state.state = "idle";
        state.message = actions.payload?.message;
        state.data = [];
      }),
      builder.addCase(saveAllScheduleThunk.rejected, (state, actions) => {
        state.loading = false;
        state.state = "idle";
        state.today = [];
        state.message = actions.payload?.message;
      }),
      builder.addCase(getScheduleThunk.pending, (state, actions) => {
        state.loading = true;
        state.state = "loading";
      }),
      builder.addCase(getScheduleThunk.fulfilled, (state, actions) => {
        state.loading = false;
        state.state = "idle";
        state.today = actions.payload?.data;
        state.message = actions.payload?.message
      }),
      builder.addCase(getScheduleThunk.rejected, (state, actions) => {
        state.loading = false;
        state.state = "idle";
        state.message = actions.payload?.message;
      }),
      builder.addCase(updateScheduleThunk.pending, (state, actions) => {
        state.loading = true;
        state.state = "loading";
      }),
      builder.addCase(updateScheduleThunk.fulfilled, (state, actions) => {
        state.loading = false;
        state.state = "idle";
        state.message = actions.payload?.message;
      }),
      builder.addCase(updateScheduleThunk.rejected, (state, actions) => {
        state.loading = false;
        state.state = "idle";
        state.message = actions.payload?.message;
      });
  },
});

export const saveAllScheduleThunk = createAsyncThunk(
  "save_all_schedule_thunk",
  async (state, dispatch) => {
    const response = await scheduleApi.createSchedule(state);
    return response;
  }
);

export const getScheduleThunk = createAsyncThunk(
  "get_schedule_today",
  async (state, dispatch) => {
    const res = await scheduleApi.getScheduleToday();
    return res;
  }
);

export const updateScheduleThunk = createAsyncThunk(
  "update_schedule",
  async (state, dispatch) => {
    const res = await scheduleApi.editSchedule(state);
    return res;
  }
);

export const { addSchedule, editScheduleToday, editSchedule, deleteSchedule } =
  scheduleSlice.actions;
export default scheduleSlice.reducer;
