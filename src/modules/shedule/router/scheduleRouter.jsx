import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../page/home";

const ScheduleRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default ScheduleRouter;
