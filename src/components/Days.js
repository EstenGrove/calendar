import React from "react";
import styles from "../css/Days.module.scss";

const Days = ({ day, start }) => {
  return (
    <>
      <div className={styles.Days}>
        <div className={styles.Days_day}>{day}</div>
      </div>
    </>
  );
};

export default Days;
