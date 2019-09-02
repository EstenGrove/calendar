import React from "react";
import styles from "../css/CalendarHeader.module.scss";
import sprite from "../assets/calendar.svg";

const CalendarHeader = ({ month, prevMonthHandler, nextMonthHandler }) => {
  return (
    <header className={styles.CalendarHeader}>
      <div className={styles.CalendarHeader_inner}>
        <svg
          className={styles.CalendarHeader_inner_arrow}
          onClick={prevMonthHandler}
        >
          <use xlinkHref={`${sprite}#icon-chevron-small-left`}></use>
        </svg>
        <h3 className={styles.CalendarHeader_inner_month}>{month}</h3>
        <svg
          className={styles.CalendarHeader_inner_arrow}
          onClick={nextMonthHandler}
        >
          <use xlinkHref={`${sprite}#icon-chevron-small-right`}></use>
        </svg>
      </div>
    </header>
  );
};

export default CalendarHeader;
