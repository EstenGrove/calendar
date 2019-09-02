import React from "react";
import styles from "../css/FirstDayOfMonth.module.scss";

const FirstDayOfMonth = ({ start }) => {
  return (
    <div
      className={styles.FirstDayOfMonth}
      style={start ? { gridColumnStart: `${start}` } : null}
    >
      <div className={styles.FirstDayOfMonth_day}>1</div>
    </div>
  );
};

export default FirstDayOfMonth;
