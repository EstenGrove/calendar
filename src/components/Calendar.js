import React, { useState, useEffect } from "react";
import styles from "../css/Calendar.module.scss";
import CalendarHeader from "./CalendarHeader";
import CalendarWeekHeader from "./CalendarWeekHeader";
import Days from "./Days";
import FirstDayOfMonth from "./FirstDayOfMonth";
import { format } from "date-fns";
import { useDates, dateFormatting } from "../utils/useDates";

const Calendar = () => {
  const {
    currentDaysInMonth,
    currentMonth,
    getPrevMonth,
    getNextMonth
  } = useDates();

  const [activeDays, setActiveDays] = useState(
    dateFormatting("JUST_DAYDATE", currentDaysInMonth)
  );
  const { monthStart } = currentMonth;
  const start = monthStart.toString().slice(0, 4);

  useEffect(() => {
    setActiveDays(dateFormatting("JUST_DAYDATE", currentDaysInMonth));
    dateReducer(start);
  }, [currentDaysInMonth, start]);

  function dateReducer(beginning) {
    console.log(beginning);

    switch (true) {
      case beginning.includes("Sun"):
        return 1;
      case beginning.includes("Mon"):
        return 2;
      case beginning.includes("Tues"):
        return 3;
      case beginning.includes("Wed"):
        return 4;
      case beginning.includes("Thurs"):
        return 5;
      case beginning.includes("Fri"):
        return 6;
      case beginning.includes("Sat"):
        return 7;
      default:
        return new Error("No match was found. Check your logic, bitch!");
    }
  }

  console.log(dateReducer(start));

  return (
    <div className={styles.Calendar}>
      <CalendarHeader
        month={format(currentMonth.monthStart, "MMMM")}
        prevMonthHandler={() => getPrevMonth()}
        nextMonthHandler={() => getNextMonth()}
      />
      <CalendarWeekHeader />
      <section className={styles.Calendar_dates}>
        {/* <Days day={day} start={dateReducer(start)} /> */}
        {activeDays.map((day, index) =>
          index === 0 ? (
            <FirstDayOfMonth start={dateReducer(start)} />
          ) : (
            <Days day={day} />
          )
        )}
      </section>
    </div>
  );
};

export default Calendar;
