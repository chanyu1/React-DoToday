import React from "react";

import GoalItem from "../../components/Goals/GoalItem";
import Goal from "../../models/goal";
import classes from "./Goals.module.css";

const Goals: React.FC<{ items: Goal[] }> = (props) => {
  return (
    // <ul className={`${["goals"]}`}>
    <ul className={classes.goals}>
      {props.items.map((item) => (
        // <li key={item.id}>{item.text}</li>
        // <GoalItem key={item.id} text={item.text} onDelete={onDeleteItem}>
        <GoalItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Goals;
