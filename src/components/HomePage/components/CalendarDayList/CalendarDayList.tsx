import CalendarDay from "@/src/common/components/CalendarDay/CalendarDay";
import { weekDays } from "@/src/constants/weekDays";
import { getDatesForWeek } from "@/src/utils/dateUtils/getDatesForWeek";
import styles from "./styles/CalendarDayList.module.scss";

const CalendarDayList = (props: any) => {
  const weeksArr = getDatesForWeek();

  return (
    <div className={`${styles.calendarDayList} hideScrollBar`}>
      {weeksArr.map((item, i) => (
        <CalendarDay
          isActive={new Date().getDay() === item.day}
          day={weekDays[Number(item.day)]}
          date={item.date}
        />
      ))}
    </div>
  );
};

export default CalendarDayList;
