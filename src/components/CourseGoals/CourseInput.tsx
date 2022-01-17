import React, { useState, useRef } from "react";

import Button from "../UI/Button";
import "./CourseInput.css";

const CourseInput: React.FC<{ onAddGoal: (text: string) => void }> = (
  props
) => {
  const goalTextInputRef = useRef<HTMLInputElement>(null);
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    event.target.value.trim().length > 0 && setIsValid(true);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = goalTextInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      // setIsValid(false);
      return;
    }
    props.onAddGoal(enteredText);
    // setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid && "invalid"}`}>
        <label htmlFor="text">Course Goal</label>
        <input
          type="text"
          id="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
