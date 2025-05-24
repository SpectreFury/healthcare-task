import styles from "./Activity.module.css";
import { activityData } from "../../../data/activityData";

const Activity = () => {
  return (
    <div className={styles.activity}>
      <div className={styles.header}>
        <h1 className={styles.title}>{activityData.title}</h1>
        <p className={styles.paragraph}>{activityData.appointmentsText}</p>
      </div>
      <div className={styles.graph}>
        <img src={activityData.graphImage} className={styles.graphImage} />
        <ul className={styles.days}>
          {activityData.days.map((day) => (
            <li key={day}>{day}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Activity;
