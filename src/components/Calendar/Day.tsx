import styles from "./Day.module.css";

type DayProps = {
  day: {
    currentDay: string;
    date: number | string;
    times: string[];
    isHighlighted: boolean;
  };
  index: number;
};

const Day = ({ day, index }: DayProps) => {
  return (
    <div
      className={
        day.isHighlighted ? styles.dayHighlighted : styles.dayContainer
      }
    >
      <p className={styles.dayHeading}>{day.currentDay}</p>
      <span className={styles.dayDate}>{day.date}</span>
      <div className={styles.dayTimes}>
        {day.times.map((time: string, timeIndex: number) => (
          <div
            className={
              index == 1 && timeIndex === 1
                ? styles.dayTimeHighlighted
                : styles.dayTime
            }
            style={{
              backgroundColor:
                index === 3 && timeIndex === 1
                  ? "var(--highlighted-dark)"
                  : undefined,
              color: index === 3 && timeIndex === 1 ? "white" : undefined,
            }}
          >
            {time}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Day;
