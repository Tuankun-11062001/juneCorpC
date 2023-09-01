import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionNotification } from "../provider/slices/actionSlice";

const Notification = ({ title }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(actionNotification(false));
    }, 1000);
  }, []);
  return (
    <div className="notification">
      <div className="notification_content notification_content_success">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Notification;
