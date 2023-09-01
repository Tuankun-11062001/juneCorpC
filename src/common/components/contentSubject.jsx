import React, { useEffect, useState } from "react";
import Title from "./widget/title";
import Buttons from "./widget/buttons";
import { useDispatch, useSelector } from "react-redux";
import handleInput from "../../modules/shedule/utils/handleInput";
import {
  actionCustomData,
  actionSaveContentSubject,
  setStatus,
} from "../utils/buttonAction";

const ContentSubject = () => {
  const dispatch = useDispatch();
  const { contentMode } = useSelector((state) => state.actions);
  const [dataContent, setDataContent] = useState({
    ...contentMode,
    content: "",
  });

  useEffect(() => {
    setDataContent(contentMode);
  }, [contentMode]);

  return (
    <div className="content_subject">
      <Title title="content Subject" data={dataContent.code} />
      <textarea
        placeholder="Content subject"
        value={dataContent.content}
        onChange={(e) => handleInput(e, dataContent, setDataContent)}
        name="content"
      />
      <div className="content_button">
        <div className="content_button_state">
          <Buttons
            title="Success"
            type="idle"
            func={(e) =>
              actionCustomData(e, dataContent, setDataContent, "success")
            }
          />
          <Buttons
            title="Warning"
            type="idle"
            func={(e) =>
              actionCustomData(e, dataContent, setDataContent, "warning")
            }
          />
          <Buttons
            title="Missing"
            type="idle"
            func={(e) =>
              actionCustomData(e, dataContent, setDataContent, "missing")
            }
          />
        </div>
        <div>
          <Buttons
            title="set state again"
            type="idle"
            func={(e) => setStatus(e)}
          />
          <Buttons
            title="Save"
            type="success"
            func={(e) => actionSaveContentSubject(e, dataContent, dispatch)}
          />
        </div>
      </div>
    </div>
  );
};

export default ContentSubject;
