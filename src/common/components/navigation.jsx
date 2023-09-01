import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink to="/schedule">Schedule tomorrow</NavLink>
      <NavLink to="/">Today</NavLink>
      <NavLink to="/appreciate">Appreciate</NavLink>
    </div>
  );
};

export default Navigation;
