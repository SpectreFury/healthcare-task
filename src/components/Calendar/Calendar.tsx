import { BiPlus } from "react-icons/bi";
import Avatar from "./Avatar";
import styles from "./Calendar.module.css";
import { RiArrowLeftFill, RiArrowRightFill } from "react-icons/ri";
import Day from "./Day";
import Card from "./Card";
import AppointmentCard from "./AppointmentCard";

const days = [
  {
    currentDay: "Mon",
    date: 25,
    times: ["8:00", "9:00", "10:00"],
    isHighlighted: false,
  },
  {
    currentDay: "Tue",
    date: 26,
    times: ["8:00", "9:00", "10:00"],
    isHighlighted: true,
  },
  {
    currentDay: "Wed",
    date: 27,
    times: ["8:00", "⎯⎯", "10:00"],
    isHighlighted: false,
  },
  {
    currentDay: "Thu",
    date: 28,
    times: ["8:00", "9:00", "⎯⎯"],
    isHighlighted: false,
  },
  {
    currentDay: "Fri",
    date: 29,
    times: ["⎯⎯", "9:00", "10:00"],
    isHighlighted: false,
  },
];

const Calendar = () => {
  return (
    <section className={styles.calendar}>
      <header className={styles.header}>
        <Avatar />
        <button className={styles.button}>
          <div className={styles.plus}>
            <BiPlus />
          </div>
        </button>
      </header>
      <div className={styles.dateContainer}>
        <div className={styles.heading}>October 2021</div>
        <div className={styles.arrows}>
          <RiArrowLeftFill />
          <RiArrowRightFill />
        </div>
      </div>
      <div className={styles.calendarContainer}>
        {days.map((day, index) => (
          <Day key={index} day={day} index={index} />
        ))}
        <div className={styles.mergedContainer}>
          <div className={styles.box}>
            <div className={styles.mergedText}>Sat</div>
            <div className={styles.mergedTextLight}>Sun</div>
          </div>
          <div className={styles.box}>
            <div className={styles.date}>30</div>
            <div className={styles.dateLight}>31</div>
          </div>
          <div className={styles.timesContainer}>
            <div className={styles.mergedBox}>
              <div className={styles.time}>12:00</div>
              <div className={styles.time}>9:00</div>
            </div>
            <div className={styles.box}>
              <div className={styles.time}>14:00</div>
              <div className={styles.timeLight}>10:00</div>
            </div>
            <div className={styles.box}>
              <div className={styles.time}>15:00</div>
              <div className={styles.timeLight}>11:00</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cardsContainer}>
        <Card
          title="Dentist"
          emoji="🦷"
          time="09:00-11:00"
          doctor="Dr. Cameron Williamson"
          isDark={true}
        />
        <Card
          title="Physiotherapy Appointment"
          emoji="💪"
          time="11:00-12:00"
          doctor="Dr. Kevin Djones"
          isDark={false}
        />
      </div>
      <div className={styles.appointmentContainer}>
        <h1 className={styles.appointmentTitle}>The Upcoming Schedule</h1>
        <p className={styles.appointmentSubtitle}>On Thursday</p>
        <div className={styles.appointmentCards}>
          <AppointmentCard
            title="Health check complete"
            emoji="💉"
            time="11:00 AM"
          />
          <AppointmentCard title="Ophthalmologist" emoji="👁️" time="14:00 AM" />
        </div>
        <p className={styles.appointmentSubtitle}>On Saturday</p>
        <div className={styles.appointmentCards}>
          <AppointmentCard title="Cardiologist" emoji="❤️" time="11:00 AM" />
          <AppointmentCard title="Neurologist" emoji="👨🏻‍⚕️" time="14:00 AM" />
        </div>
      </div>
    </section>
  );
};

export default Calendar;
