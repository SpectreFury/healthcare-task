import styles from "./Dashboard.module.css";
import HealthDashboard from "./HealthDashboard/HealthDashboard";

const Dashboard = () => {
  return (
    <section className={styles.dashboard}>
      <div className={styles.dashboardContainer}>
        <input placeholder="Search" className={styles.input} />
        <HealthDashboard />
      </div>
    </section>
  );
};

export default Dashboard;
