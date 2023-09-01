import { configureStore } from "@reduxjs/toolkit";
import scheduleSlice from "./slices/scheduleSlice";
import actionSlice from "./slices/actionSlice";
import weekSlice from "./slices/weekSlice";

const appSlices = {
  schedule: scheduleSlice,
  actions: actionSlice,
  week: weekSlice,
};

const store = configureStore({
  reducer: appSlices,
});

export default store;
