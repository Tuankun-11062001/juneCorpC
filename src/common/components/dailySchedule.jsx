import React, { useEffect } from "react";
import Subject from "./subject";
import Title from "./widget/title";
import { useDispatch, useSelector } from "react-redux";
import {
  getScheduleThunk, updateScheduleThunk,
} from "../provider/slices/scheduleSlice";
import { actionNotification } from "../provider/slices/actionSlice";

const DailySchedule = () => {
  const { today } = useSelector((state) => state.schedule);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchSchedule = () => {
      dispatch(getScheduleThunk());
    dispatch(actionNotification(true));
    };
    fetchSchedule();
  }, []);


  useEffect(() => {
    const updateSchedule = () => {
      dispatch(updateScheduleThunk(today));
      dispatch(actionNotification(true));
    };
    updateSchedule();
  },[today])

  return (
    <div className="daily-schedule">
      {/* date */}
      <Title title="Mon" />
      {/* morning */}
      <div className="row">
        <p>Morning</p>
        <div className="col">
          {today.morning?.map((schedule, i) => (
            <Subject key={i} data={{ ...schedule, i: i }} />
          ))}
        </div>
      </div>
      {/* afternoon */}
      <div className="row">
        <p>Afternoon</p>
        <div className="col">
          {today.afternoon?.map((schedule, i) => (
            <Subject key={i} data={{ ...schedule, i: i }} />
          ))}
        </div>
      </div>
      {/* evenning */}
      <div className="row">
        <p>Evenning</p>
        <div className="col">
          {today.evenning?.map((schedule, i) => (
            <Subject key={i} data={{ ...schedule, i: i }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DailySchedule;
