import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/navigation";

const MainLayout = ({ children, type }) => {
  const classNameLayout = () => {
    let name;
    switch (type) {
      case "home":
        name = "layoutApp_home";
        return name;
      case "schedule":
        name = "layoutApp_schedule";
        return name;
      case "appreciate":
        name = "layoutApp_appreciate";
        return name;
    }
    return name;
  };

  return (
    <div className="layoutApp">
      {/* logo */}
      <Link to={"/"} className="logo">
        June Corp.
      </Link>
      <Navigation />
      <div className={classNameLayout()}>{children}</div>
    </div>
  );
};

export default MainLayout;
