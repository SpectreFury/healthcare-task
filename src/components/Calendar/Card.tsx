import styles from "./Card.module.css";

type CardProps = {
  title: string;
  emoji: string;
  time: string;
  doctor: string;
  isDark: boolean;
};

const DARK = "#292c66";
const LIGHT = "#dde2f9";

const Card = ({ doctor, emoji, time, title, isDark }: CardProps) => {
  return (
    <div
      className={styles.card}
      style={{ backgroundColor: isDark ? DARK : LIGHT }}
    >
      <div className={styles.header} style={{ color: isDark ? LIGHT : DARK }}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.emoji}>{emoji}</div>
      </div>
      <div className={styles.time} style={{ color: isDark ? LIGHT : DARK }}>
        {time}
      </div>
      <div className={styles.doctor} style={{ color: isDark ? LIGHT : DARK }}>
        {doctor}
      </div>
    </div>
  );
};

export default Card;
