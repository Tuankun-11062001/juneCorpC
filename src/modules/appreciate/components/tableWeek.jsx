import React, { useEffect } from "react";
import Title from "../../../common/components/widget/title";
import Subject from "../../../common/components/subject";
import { useDispatch, useSelector } from "react-redux";
import { getWeekThunk } from "../../../common/provider/slices/weekSlice";
import Loading from "../../../common/components/loading";

const TableWeek = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.week);
  useEffect(() => {
    dispatch(getWeekThunk());
  }, []);

  return (
    <>
      <div className="appreciate_table">
        <Title title="schedule Week" />

        <div className="appreciate_week">
          {/* morning afternoon evenning */}

          {/* <div className="appreciate_session">
          <p></p>
          <p>Morning</p>
          <p>Afternoon</p>
          <p>Evenning</p>
        </div> */}

          {/* monday */}

          {data?.map((scheduleWeek) => (
            <div className="appreciate_day">
              <p>{scheduleWeek.date}</p>

              {/* morning */}
              <p>Morning</p>
              <div>
                {scheduleWeek.morning?.map((schedule, i) => (
                  <Subject data={{ ...schedule, i }} key={schedule._id} />
                ))}
              </div>

              {/* afternoon */}
              <p>Afternoon</p>
              <div>
                {scheduleWeek.afternoon?.map((schedule, i) => (
                  <Subject data={{ ...schedule, i }} key={schedule._id} />
                ))}
              </div>

              {/* evenning */}
              <p>Evenning</p>
              <div>
                {scheduleWeek.evenning?.map((schedule, i) => (
                  <Subject data={{ ...schedule, i }} key={schedule._id} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {loading && <Loading />}
    </>
  );
};

export default TableWeek;
