import React from "react";
import MainLayout from "../../../common/layout/mainLayout";
import TableWeek from "../components/tableWeek";
import Note from "../components/note";

const Home = () => {
  return (
    <MainLayout type="appreciate">
      <div className="appreciate">
        <TableWeek />
        <Note />
      </div>
    </MainLayout>
  );
};

export default Home;
