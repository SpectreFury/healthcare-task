import styles from "./AppointmentCard.module.css";

type AppointmentCardProps = {
  title: string;
  emoji: string;
  time: string;
};

const AppointmentCard = ({ emoji, time, title }: AppointmentCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.emoji}>{emoji}</div>
      </div>
      <div className={styles.time}>{time}</div>
    </div>
  );
};

export default AppointmentCard;
