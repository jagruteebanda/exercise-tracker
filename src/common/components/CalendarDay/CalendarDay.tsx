import styles from "./styles/CalendarDay.module.scss";

interface CalendarDayProps {
  day: string;
  date: number | string;
}

const CalendarDay = (props: CalendarDayProps) => {
  const { day, date } = props;
  return (
    <div className={styles.calendarBox}>
      <div className={styles.day}>{day}</div>
      <div className={styles.date}>{date}</div>
    </div>
  );
};

export default CalendarDay;
