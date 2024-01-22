import styles from "./styles/CalendarDay.module.scss";
import Card from "@mui/material/Card";

interface CalendarDayProps {
  day: string | any;
  date: string;
  isActive: boolean;
}

const CalendarDay = (props: CalendarDayProps) => {
  const { day, date, isActive } = props;
  return (
    <Card
      sx={{
        // flex: "calc(100% / 7)",
        border: "1px solid #e6e6e6",
        margin: "0.5rem 2px 0.5rem 0",
        minWidth: "50px",
      }}
    >
      <div className={styles.day}>{day}</div>
      <div className={styles.date}>{date}</div>
    </Card>
  );
};

export default CalendarDay;
