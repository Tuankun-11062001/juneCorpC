import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import Home from "../page/home";
import ScheduleRouter from "../../modules/shedule/router/scheduleRouter";
import AppreciateRouter from "../../modules/appreciate/router/appreciateRouter";

const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule/*" element={<ScheduleRouter />} />
        <Route path="/appreciate/*" element={<AppreciateRouter />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
