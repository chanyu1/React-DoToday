import React from "react";

import Goal from "../../models/goal";
// import classes from "./Goals.module.css";

const Goals: React.FC<{ items: Goal[] }> = (props) => {
  return (
    <ul className={`${["goals"]}`}>
      {props.items.map((item) => (
        // <GoalItem key={item.id} text={item.text} onDelete={onDeleteItem}>
        <li key={item.id}>{item.text}</li>
        // </GoalItem>
      ))}
    </ul>
  );
};

export default Goals;
