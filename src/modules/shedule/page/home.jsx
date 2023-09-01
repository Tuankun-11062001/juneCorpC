import React from "react";
import MainLayout from "../../../common/layout/mainLayout";
import ScheduleForm from "../components/scheduleForm";
import ScheduleData from "../components/scheduleData";

const Home = () => {
  return (
    <MainLayout type="schedule">
      <ScheduleForm />
      <ScheduleData />
    </MainLayout>
  );
};

export default Home;
