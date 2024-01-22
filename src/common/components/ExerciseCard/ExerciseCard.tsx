import { Card, Checkbox } from "@mui/material";

const ExerciseCard = (props) => {
  const { exerciseName } = props;
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        padding: "0.5rem",
        marginBottom: "0.5rem",
      }}
    >
      <span
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {exerciseName}
      </span>
      <Checkbox />
    </Card>
  );
};

export default ExerciseCard;
