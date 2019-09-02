import React from "react";
import styles from "../css/CalendarWeekHeader.module.scss";
import { weekDays, dateFormatting } from "../utils/useDates";
import { useMediaQuery } from "../utils/useMediaQuery";

const CalendarWeekHeader = () => {
  const { width: w } = useMediaQuery();

  return (
    <div className={styles.CalendarWeekHeader}>
      {weekDays.map(day => (
        <div className={styles.CalendarWeekHeader_item}>
          <div className={styles.CalendarWeekHeader_item_day}>
            {w <= 400 ? dateFormatting("ABBR_DAY", day) : day}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CalendarWeekHeader;
