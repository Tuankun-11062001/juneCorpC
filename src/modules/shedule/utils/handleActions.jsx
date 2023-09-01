
import { actionError, actionNotification } from "../../../common/provider/slices/actionSlice";
import {
  addSchedule,
  deleteSchedule,
  editSchedule,
  saveAllScheduleThunk,
} from "../../../common/provider/slices/scheduleSlice";

export const handleAddSchedule = (data, dispatch) => {
  if (
    data.date === "" ||
    data.session === "" ||
    data.subject === "" ||
    data.time === ""
  ) {
    return dispatch(actionError({mode:true,message:'Missing Fields'}));
  }

  let code;

  switch (data.session) {
    case "morning":
      code =
        data.subject.charAt(0) +
        "_" +
        "M" +
        "-" +
        data.time.slice(0, 2) +
        "_" +
        data.date.slice(5);
      break;
    case "afternoon":
      code =
        data.subject.charAt(0) +
        "_" +
        "A" +
        "-" +
        data.time.slice(0, 2) +
        "_" +
        data.date.slice(5);
      break;
    case "evenning":
      code =
        data.subject.charAt(0) +
        "_" +
        "E" +
        "-" +
        data.time.slice(0, 2) +
        "_" +
        data.date.slice(5);
      break;
    default:
      code = "error_code";
      break;
  }

  const customData = {
    ...data,
    code: code,
  };

  dispatch(addSchedule(customData));
};

export const handleSaveEditSchedule = (data, dispatch) => {
  dispatch(editSchedule(data));
};

export const handleDeleteSchedule = (data, dispatch) => {
  dispatch(deleteSchedule(data));
};

export const handleSaveAllSchedule = (data, dispatch) => {
  const currentDate = new Date();
  // const nextDate = new Date(currentDate);
  // nextDate.setDate(currentDate.getDate() + 1);
  // const tomorrow =
  //   ("0" + (nextDate.getMonth() + 1)).slice(-2) +
  //   "/" +
  //   ("0" + nextDate.getDate()).slice(-2) +
  //   "/" +
  //   nextDate.getFullYear();
  const tomorrow =
    ("0" + (currentDate.getMonth() + 1)).slice(-2) +
    "/" +
    ("0" + currentDate.getDate()).slice(-2) +
    "/" +
    currentDate.getFullYear();
  const customData = {
    ...data,
    date: tomorrow,
  };
  dispatch(saveAllScheduleThunk(customData));
  dispatch(actionNotification(true));
};
