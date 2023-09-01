import { createSlice } from "@reduxjs/toolkit";

const actionSlice = createSlice({
  initialState: {
    editMode: {
      mode: false,
      data: {},
    },
    contentMode: {},
    notification: false,
    error:{
      mode:false,
      message:''
    }
  },
  name: "actions_app",
  reducers: {
    actionEditMode: (state, actions) => {
      state.editMode.mode = true;
      state.editMode.data = actions.payload;
    },
    actionCloseEditMode: (state, actions) => {
      state.editMode.mode = false;
      state.editMode.data = actions.payload;
    },
    actionContentMode: (state, actions) => {
      state.contentMode = actions.payload;
    },
    actionNotification: (state, actions) => {
      state.notification = actions.payload;
    },
    actionError: (state, actions) => {
      state.error.mode = actions.payload.mode;
      state.error.message = actions.payload.message;
    }
  },
});

export const {
  actionEditMode,
  actionCloseEditMode,
  actionContentMode,
  actionNotification,
  actionError
} = actionSlice.actions;
export default actionSlice.reducer;
