import React from "react";
import Title from "../../../common/components/widget/title";

const Note = () => {
  return (
    <div className="appreciate_note">
      <Title title="Note" />
      <div className="appreciate_note_list">
        <div className="appreciate_note_success">
          <span></span>
          <p>Success</p>
        </div>
        <div className="appreciate_note_warning">
          <span></span>
          <p>Warning</p>
        </div>
        <div className="appreciate_note_missing">
          <span></span>
          <p>Missing</p>
        </div>
      </div>
    </div>
  );
};

export default Note;
