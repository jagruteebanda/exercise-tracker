import CalendarDayList from "./components/CalendarDayList/CalendarDayList";
import styles from "./styles/HomePage.module.scss";
import { DailyExerciseList } from "./components/DailyExerciseList/DailyExerciseList";

const HomePage = (props) => {
  return (
    <div className={styles.homePageContainer}>
      <CalendarDayList />
      <DailyExerciseList />
    </div>
  );
};

export default HomePage;
