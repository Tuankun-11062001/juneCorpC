import React from "react";

const Title = ({ title, data }) => {
  return (
    <div className="title">
      <p>{title}</p>
      {data && <p>({data ? data : ""})</p>}
    </div>
  );
};

export default Title;
