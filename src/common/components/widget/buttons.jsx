import React from "react";

const Buttons = ({ title, func, type, icon }) => {
  const classNameButton = () => {
    let name;
    switch (type) {
      case "success":
        name = "button button_success";
        return name;
      case "warning":
        name = "button button_warning";
        return name;
      case "missing":
        name = "button button_missing";
        return name;
      case "icon":
        name = "button button_icon";
        return name;
      case "iconEdit":
        name = "button button_edit";
        return name;
      case "idle":
        name = "button button_idle";
        return name;
      case "iconDelete":
        name = "button button_delete";
        return name;
    }
    return name;
  };
  return (
    <button onClick={func} className={classNameButton()} disabled={false}>
      <p>{title}</p>
      <img src={icon} />
    </button>
  );
};

export default Buttons;
