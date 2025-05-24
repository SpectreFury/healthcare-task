import { useState } from "react";
import styles from "./Activity.module.css";
import ReactApexChart from "react-apexcharts";

const Activity = () => {
  return (
    <div className={styles.activity}>
      <div className={styles.header}>
        <h1 className={styles.title}>Activity</h1>
        <p className={styles.paragraph}>3 appointments on this week</p>
      </div>
      <div className={styles.graph}>
        <img src="./graph.png" className={styles.graphImage} />
        <ul className={styles.days}>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
          <li>Sun</li>
        </ul>
      </div>
    </div>
  );
};

export default Activity;
