import React from "react";
import MainLayout from "../layout/mainLayout";
import DailySchedule from "../components/dailySchedule";
import ContentSubject from "../components/contentSubject";
import ExpiresSubject from "../components/expiresSubject";
import Notification from "../components/notification";
import { useSelector } from "react-redux";
import Loading from "../components/loading";

const Home = () => {
  const { notification } = useSelector((state) => state.actions);
  const { loading, message } = useSelector((state) => state.schedule);
  return (
    <MainLayout type="home">
      <DailySchedule />
      <ContentSubject />
      <ExpiresSubject />
      {notification && <Notification title={message} />}
      {loading && <Loading />}
    </MainLayout>
  );
};

export default Home;
