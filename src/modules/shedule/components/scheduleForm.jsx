import React, { useEffect, useState } from "react";
import Input from "../../../common/components/widget/input";
import Select from "../../../common/components/widget/select";
import handleInput from "../utils/handleInput";
import Buttons from "../../../common/components/widget/buttons";
import {
  handleAddSchedule,
  handleSaveEditSchedule,
} from "../utils/handleActions";
import { useDispatch, useSelector } from "react-redux";
import { actionCloseEditSubject } from "../../../common/utils/buttonAction";

const ScheduleForm = () => {
  const dispatch = useDispatch();
  const { mode, data } = useSelector((state) => state.actions.editMode);

  const [dataSchedule, setDataSchedule] = useState({
    date: "",
    session: "",
    subject: "",
    time: "",
    code: "",
    state: "",
    content: "",
  });

  const [dataScheduleEdit, setDataScheduleEdit] = useState({
    date: data.date,
    session: data.session,
    subject: data.subject,
    time: data.time,
    code: data.code,
    state: data.state,
    content: data.content,
  });

  useEffect(() => {
    setDataScheduleEdit(data);
  }, [data]);

  return (
    <>
      {mode ? (
        <ScheduleFormEdit
          data={dataScheduleEdit}
          setData={setDataScheduleEdit}
          dispatch={dispatch}
        />
      ) : (
        <Form
          data={dataSchedule}
          setData={setDataSchedule}
          dispatch={dispatch}
        />
      )}
    </>
  );
};

const ScheduleFormEdit = ({ data, setData, dispatch }) => {
  return (
    <div className="schedule_form">
      <Input
        placeholder="Date tomorrow"
        type="date"
        func={(e) => handleInput(e, data, setData)}
        name="date"
        value={data.date}
      />
      <Select
        name="session"
        value={data.session}
        func={(e) => handleInput(e, data, setData)}
      />
      <Input
        placeholder="Subject"
        type="text"
        func={(e) => handleInput(e, data, setData)}
        name="subject"
        value={data.subject}
      />
      <Input
        placeholder="Time"
        type="text"
        func={(e) => handleInput(e, data, setData)}
        name="time"
        value={data.time}
      />
      <div className="schedule_form_btns">
        <Buttons
          title="Save"
          type="success"
          func={() => handleSaveEditSchedule(data, dispatch)}
        />
        <Buttons
          title="Close"
          type="missing"
          func={() => actionCloseEditSubject({}, dispatch)}
        />
      </div>
    </div>
  );
};

const Form = ({ data, setData, dispatch }) => {
  return (
    <div className="schedule_form">
      <Input
        placeholder="Date tomorrow"
        type="date"
        func={(e) => handleInput(e, data, setData)}
        name="date"
        value={data.date}
      />
      <Select
        name="session"
        value={data.session}
        func={(e) => handleInput(e, data, setData)}
      />
      <Input
        placeholder="Subject"
        type="text"
        func={(e) => handleInput(e, data, setData)}
        name="subject"
        value={data.subject}
      />
      <Input
        placeholder="Time"
        type="text"
        func={(e) => handleInput(e, data, setData)}
        name="time"
        value={data.time}
      />
      <Buttons
        title="Add"
        type="success"
        func={() => handleAddSchedule(data, dispatch)}
      />
    </div>
  );
};

export default ScheduleForm;
