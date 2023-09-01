import React from "react";
import Title from "../../../common/components/widget/title";
import Subject from "../../../common/components/subject";
import Buttons from "../../../common/components/widget/buttons";
import { useDispatch, useSelector } from "react-redux";
import { handleSaveAllSchedule } from "../utils/handleActions";
import Notification from "../../../common/components/notification";

const ScheduleData = () => {
  const { data, message } = useSelector((state) => state.schedule);
  const { notification } = useSelector((state) => state.actions);
  const dispatch = useDispatch();

  return (
    <>
      <div className="schedule_data">
        <Title title="Data Save" />
        <div className="schedule_data_list">
          <div className="schedule_data_group">
            <Title title="Morning" />
            <div>
              {data.morning?.map((schedule, i) => (
                <Subject type="schedule" data={{ ...schedule, i: i }} key={i} />
              ))}
            </div>
          </div>
          <div className="schedule_data_group">
            <Title title="Afternoon" />
            <div>
              {data.afternoon?.map((schedule, i) => (
                <Subject type="schedule" data={{ ...schedule, i: i }} key={i} />
              ))}
            </div>
          </div>
          <div className="schedule_data_group">
            <Title title="Evenning" />
            <div>
              {data.evenning?.map((schedule, i) => (
                <Subject type="schedule" data={{ ...schedule, i: i }} key={i} />
              ))}
            </div>
          </div>
        </div>
        <Buttons
          title="Save all"
          type="success"
          func={() => handleSaveAllSchedule(data, dispatch)}
        />
      </div>
      {notification && message ? <Notification title={message} /> : ''}
    </>
  );
};

export default ScheduleData;
