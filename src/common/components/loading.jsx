import React from "react";
import spinner from "../../assets/spinner.svg";
const Loading = () => {
  return (
    <div className="loading">
      <div className="loading_content">
        <img src={spinner} />
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
