import React from "react";

const Select = ({ name, func, value }) => {
  return (
    <select className="select" name={name} onChange={func} value={value}>
      <option value="choose">Choose</option>
      <option value="morning">Morning</option>
      <option value="afternoon">Afternoon</option>
      <option value="evenning">Evenning</option>
    </select>
  );
};

export default Select;
