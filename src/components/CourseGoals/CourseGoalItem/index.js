import React from "react";

import classes from "./style.module.css";

const CourseGoalItem = ({ onDelete, id, children }) => {
  const deleteHandler = () => {
    onDelete(id);
  };

  return (
    <li className={`${classes["goal-item"]}`} onClick={deleteHandler}>
      {children}
    </li>
  );
};

export default CourseGoalItem;
