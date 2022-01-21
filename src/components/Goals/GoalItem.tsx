import React from "react";

import classes from "./GoalItem.module.css";

// const GoalItem = ({ onDelete, id, children }) => {
const GoalItem: React.FC<{ text: string }> = (props) => {
  // const deleteHandler = () => {
  //   onDelete(id);
  // };

  return (
    <li className={classes.item}>
      {/* <li className={`${["goal-item"]}`} onClick={deleteHandler}> */}
      {props.text}
    </li>
  );
};

export default GoalItem;
