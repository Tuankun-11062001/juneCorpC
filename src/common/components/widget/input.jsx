import React from "react";

const Input = ({ name, type, func, value, placeholder, disabled }) => {
  return (
    <>
      <input
        className="input"
        name={name}
        type={type}
        onChange={func}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
      />
    </>
  );
};

export default Input;
