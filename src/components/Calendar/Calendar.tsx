import { BiPlus } from "react-icons/bi";
import Avatar from "./Avatar";
import styles from "./Calendar.module.css";
import { RiArrowLeftFill, RiArrowRightFill } from "react-icons/ri";
import Day from "./Day";
import Card from "./Card";
import AppointmentCard from "./AppointmentCard";
import {
  calendarDays,
  mergedDays,
  cards,
  appointmentSchedule,
} from "../../data/calendarData";

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
        {calendarDays.map((day, index) => (
          <Day key={index} day={day} index={index} />
        ))}
        <div className={styles.mergedContainer}>
          <div className={styles.box}>
            <div className={styles.mergedText}>{mergedDays.days[0]}</div>
            <div className={styles.mergedTextLight}>{mergedDays.days[1]}</div>
          </div>
          <div className={styles.box}>
            <div className={styles.date}>{mergedDays.dates[0]}</div>
            <div className={styles.dateLight}>{mergedDays.dates[1]}</div>
          </div>
          <div className={styles.timesContainer}>
            <div className={styles.mergedBox}>
              <div className={styles.time}>{mergedDays.times[0][0]}</div>
              <div className={styles.time}>{mergedDays.times[0][1]}</div>
            </div>
            <div className={styles.box}>
              <div className={styles.time}>{mergedDays.times[1][0]}</div>
              <div className={styles.timeLight}>{mergedDays.times[1][1]}</div>
            </div>
            <div className={styles.box}>
              <div className={styles.time}>{mergedDays.times[2][0]}</div>
              <div className={styles.timeLight}>{mergedDays.times[2][1]}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cardsContainer}>
        {cards.map((card, idx) => (
          <Card key={idx} {...card} />
        ))}
      </div>
      <div className={styles.appointmentContainer}>
        <h1 className={styles.appointmentTitle}>The Upcoming Schedule</h1>
        {appointmentSchedule.map((sched, idx) => (
          <div key={sched.day}>
            <p className={styles.appointmentSubtitle}>On {sched.day}</p>
            <div className={styles.appointmentCards}>
              {sched.appointments.map((appt, i) => (
                <AppointmentCard key={appt.title + i} {...appt} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Calendar;
