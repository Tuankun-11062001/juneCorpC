import {
  actionCloseEditMode,
  actionContentMode,
  actionEditMode,
} from "../provider/slices/actionSlice";
import { editScheduleToday } from "../provider/slices/scheduleSlice";

export const actionEditSubject = (state, dispatch) => {
  dispatch(actionEditMode(state));
};
export const actionContentSubject = (state, dispatch) => {
  dispatch(actionContentMode(state));
};
export const actionCloseEditSubject = (state, dispatch) => {
  dispatch(actionCloseEditMode(state));
};

export const actionCustomData = (e, state, setState, type) => {
  const parent = e.target.parentElement;
  const item = e.target;
  const elementBtn = parent.querySelectorAll("button");

  item.classList.remove("button_idle");
  switch (type) {
    case "success":
      item.classList.toggle("button_success");
      break;
    case "warning":
      item.classList.toggle("button_warning");
      break;
    case "missing":
      item.classList.toggle("button_missing");
      break;
  }

  setState({
    ...state,
    state: type,
  });

  for (let i = 0; i <= elementBtn.length; i++) {
    elementBtn[i].disabled = true;
  }
};

export const actionSaveContentSubject = (e, state, dispatch) => {
  dispatch(editScheduleToday(state));
  setStatus(e);
};

export const setStatus = (e) => {
  const parentElement = e.target.parentNode.parentNode;
  const buttonsStatus = parentElement.querySelectorAll(
    ".content_button_state button"
  );
  for (let i = 0; i < buttonsStatus.length; i++) {
    buttonsStatus[i].classList.contains("button_missing")
      ? buttonsStatus[i].classList.remove("button_missing")
      : "";
    buttonsStatus[i].classList.contains("button_success")
      ? buttonsStatus[i].classList.remove("button_success")
      : "";
    buttonsStatus[i].classList.contains("button_warning")
      ? buttonsStatus[i].classList.remove("button_warning")
      : "";
    buttonsStatus[i].classList.add("button_idle");
    buttonsStatus[i].disabled = false;
  }
};
