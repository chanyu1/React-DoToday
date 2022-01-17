import React from "react";

// import "./CourseGoalItem.css";

// const GoalItem = ({ onDelete, id, children }) => {
const GoalItem: React.FC<{ text: string }> = (props) => {
  // const deleteHandler = () => {
  //   onDelete(id);
  // };

  return (
    <li className={`${["goal-item"]}`}>
      {/* <li className={`${["goal-item"]}`} onClick={deleteHandler}> */}
      {props.text}
    </li>
  );
};

export default GoalItem;
