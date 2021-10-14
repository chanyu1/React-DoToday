import React, { useState } from "react";

import Button from "../../UI/Button";
import classes from "./style.module.css";

const CourseInput = ({ onAddGoal }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    event.target.value.trim().length > 0 && setIsValid(true);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    onAddGoal(enteredValue);
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${classes["form-control"]} ${!isValid && classes.invalid}`}
      >
        <label>Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
