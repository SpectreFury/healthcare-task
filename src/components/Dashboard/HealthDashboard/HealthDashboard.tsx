import styles from "./HealthDashboard.module.css";

import { IoChevronDown } from "react-icons/io5";

const HealthDashboard = () => {
  return (
    <div className={styles.healthDashboard}>
      <div className={styles.healthDashboardContainer}>
        <div className={styles.header}>
          <h1 className={styles.title}>Dashboard</h1>
          <div className={styles.dropdown}>
            This week
            <IoChevronDown />
          </div>
        </div>
        <div className={styles.dashboardItems}>
          <div className={styles.cardHuman}></div>
          <div className={styles.cardOrganContainer}>
            <div className={styles.cardOrgan}></div>
            <div className={styles.cardOrgan}></div>
            <div className={styles.cardOrgan}></div>
          </div>
        </div>
        <div>
          Activity
        </div>
      </div>
    </div>
  );
};

export default HealthDashboard;
