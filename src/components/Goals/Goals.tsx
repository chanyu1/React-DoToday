import React, { useContext } from "react";

import GoalItem from "../../components/Goals/GoalItem";
import { GoalsContext } from "../store/goals-context";
import classes from "./Goals.module.css";

const Goals: React.FC = () => {
  const goalsCtx = useContext(GoalsContext);

  return (
    <ul className={classes.goals}>
      {goalsCtx.items.map((item) => (
        <GoalItem
          key={item.id}
          text={item.text}
          onRemoveGoal={goalsCtx.removeGoal.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Goals;
