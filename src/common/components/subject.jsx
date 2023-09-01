import React from "react";
import Buttons from "./widget/buttons";
import trash from "../../assets/trash.svg";
import edit from "../../assets/edit.svg";
import { actionContentSubject, actionEditSubject } from "../utils/buttonAction";
import { useDispatch } from "react-redux";
import { handleDeleteSchedule } from "../../modules/shedule/utils/handleActions";

const Subject = ({ type, data }) => {
  const dispatch = useDispatch();
  const subjectType = () => {
    switch (type) {
      case "expires":
        return (
          <>
            <div className="expires_head">
              <div>
                <p>Time</p>
                <p>{data?.time}</p>
              </div>
              <Buttons
                icon={trash}
                type="iconDelete"
                func={() => handleDeleteSchedule(data, dispatch)}
              />
            </div>
            <p>{data?.subject}</p>
            <div className="subject_expires_group">
              <p>Content</p>
              <p>{data?.content}</p>
            </div>
            <div className="subject_expires_group">
              <p>Status</p>
              <p>{data?.status}</p>
            </div>
          </>
        );
      case "schedule":
        return (
          <>
            <div className="schedule">
              <div className="schedule_left">
                <div>
                  <p>{data?.time}</p>
                  <p>{data?.code}</p>
                </div>
                <p>{data?.subject}</p>
              </div>
              <div className="schedule_right">
                <Buttons
                  icon={edit}
                  type="iconEdit"
                  func={() => actionEditSubject(data, dispatch)}
                />
                <Buttons
                  icon={trash}
                  type="iconDelete"
                  func={() => handleDeleteSchedule(data, dispatch)}
                />
              </div>
            </div>
          </>
        );
      default:
        return (
          <>
            <div>
              <p>{data?.time}</p>
              <p>{data?.code}</p>
            </div>
            <p>{data?.subject}</p>
          </>
        );
    }
  };

  const handleClassNameSubject = () => {
    let name;
    switch (data?.state) {
      case "success":
        name = "subject subject_success";
        break;
      case "warning":
        name = "subject subject_warning";
        break;
      case "missing":
        name = "subject subject_missing";
        break;
      default:
        name = "subject";
        break;
    }
    return name;
  };
  return (
    <div
      className={handleClassNameSubject()}
      onClick={() => actionContentSubject(data, dispatch)}
    >
      <span></span>
      {subjectType()}
    </div>
  );
};

export default Subject;
