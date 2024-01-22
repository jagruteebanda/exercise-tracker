import { ExerciseCard } from "@/src/common/components/ExerciseCard";
import { exerciseList } from "../../data/exerciseList";

export const DailyExerciseList = () => {
  return (
    <div style={{ padding: "1rem" }}>
      {exerciseList.map((exercise) => (
        <ExerciseCard exerciseName={exercise.name} />
      ))}
    </div>
  );
};
