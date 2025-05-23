import styles from "./Container.module.css";

import Calendar from "./Calendar/Calendar";
import Dashboard from "./Dashboard/Dashboard";
import Sidebar from "./Sidebar/Sidebar";

const Container = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Dashboard />
      <Calendar />
    </div>
  );
};

export default Container;
