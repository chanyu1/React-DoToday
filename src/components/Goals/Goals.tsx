import React from "react";

import Goal from "../../models/goal";
import classes from "./Goals.module.css";

const Goals: React.FC<{ items: Goal[] }> = (props) => {
  return (
    <ul className={`${["goals"]}`}>
      {props.items.map((item) => (
        // <CourseGoalItem key={goal.id} id={goal.id} onDelete={onDeleteItem}>
        <ul key={item.id}>{item.text}</ul>
        // </CourseGoalItem>
      ))}
    </ul>
  );
};

export default Goals;
