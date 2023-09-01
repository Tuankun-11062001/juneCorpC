import React, { useEffect, useState } from "react";
import Title from "./widget/title";
import Subject from "./subject";
import { useSelector } from "react-redux";

const ExpiresSubject = () => {
  const { today } = useSelector((state) => state.schedule);
  const checkMorning = today.morning?.filter(
    (schedule) => schedule.state !== ""
  );
  const checkAfternoon = today.afternoon?.filter(
    (schedule) => schedule.state !== ""
  );
  const checkEvenning = today.evenning?.filter(
    (schedule) => schedule.state !== ""
  );

  const final = checkMorning?.concat(checkAfternoon)?.concat(checkEvenning);

  const succes = final?.filter((item) => item.state === "success");
  const warning = final?.filter((item) => item.state === "warning");
  const missing = final?.filter((item) => item.state === "missing");

  const [data, setData] = useState({
    success: null,
    warning: null,
    missing: null,
  });

  useEffect(() => {
    setData({
      ...data,
      success: Math.floor((succes?.length / final?.length) * 100),
      warning: Math.floor((warning?.length / final?.length) * 100),
      missing: Math.floor((missing?.length / final?.length) * 100),
    });
  }, [today]);

  return (
    <div className="expires_subject">
      <Title title="Subject Expires" />
      <div className="expires_sub">
        <div className="expires_sub_success">
          <span></span>
          <p>{data?.success}(%)</p>
        </div>
        <div className="expires_sub_warning">
          <span></span>
          <p>{data?.warning}(%)</p>
        </div>
        <div className="expires_sub_missing">
          <span></span>
          <p>{data?.missing}(%)</p>
        </div>
      </div>
      <div className="expires_subject_list">
        {final?.map((schedule, i) => (
          <Subject type="expires" key={i} data={{ ...schedule, i }} />
        ))}
      </div>
    </div>
  );
};

export default ExpiresSubject;
