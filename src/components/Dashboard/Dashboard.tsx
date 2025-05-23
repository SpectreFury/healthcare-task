import { HiMagnifyingGlass } from "react-icons/hi2";
import styles from "./Dashboard.module.css";
import HealthDashboard from "./HealthDashboard/HealthDashboard";
import { IoMdNotifications } from "react-icons/io";

const Dashboard = () => {
  return (
    <section className={styles.dashboard}>
      <div className={styles.dashboardContainer}>
        <div className={styles.inputWrapper}>
          <span className={styles.searchIcon}>
            <HiMagnifyingGlass />
          </span>
          <input placeholder="Search" className={styles.input} />
          <span className={styles.magnifyingGlassIcon}>
            <IoMdNotifications />
          </span>
        </div>
        <HealthDashboard />
      </div>
    </section>
  );
};

export default Dashboard;
