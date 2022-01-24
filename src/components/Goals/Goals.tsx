import React from "react";

import GoalItem from "../../components/Goals/GoalItem";
import Goal from "../../models/goal";
import classes from "./Goals.module.css";

const Goals: React.FC<{ items: Goal[]; onRemoveGoal: (id: string) => void }> = (
  props
) => {
  return (
    <ul className={classes.goals}>
      {props.items.map((item) => (
        <GoalItem
          key={item.id}
          text={item.text}
          onRemoveGoal={props.onRemoveGoal.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Goals;
