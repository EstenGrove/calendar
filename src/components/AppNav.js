import React from "react";
import styles from "../css/AppNav.module.scss";
import sprite from "../assets/calendar.svg";

const AppNav = () => {
  return (
    <nav className={styles.AppNav}>
      <svg className={styles.AppNav_icon}>
        <use xlinkHref={`${sprite}#icon-menu`}></use>
      </svg>
      <div className={styles.AppNav_today}>
        <div className={styles.AppNav_today_label}>Today</div>
        <div className={styles.AppNav_today_arrows}>
          <svg className={styles.AppNav_today_arrows_arrow}>
            <use xlinkHref={`${sprite}#icon-arrow-thin-left`}></use>
          </svg>
          <svg className={styles.AppNav_today_arrows_arrow}>
            <use xlinkHref={`${sprite}#icon-arrow-thin-right`}></use>
          </svg>
        </div>
      </div>
      <div className={styles.AppNav_views}>
        <button className={styles.AppNav_views_btn}>Week</button>
        <button className={styles.AppNav_views_btn}>Month</button>
        <button className={styles.AppNav_views_btn}>Year</button>
      </div>
    </nav>
  );
};

export default AppNav;
