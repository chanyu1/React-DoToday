import React, { useState, useRef } from "react";

import Button from "../UI/Button";
// import classes from "./NewGoal.module.css";

const NewGoal: React.FC<{ onAddGoal: (text: string) => void }> = (props) => {
  const goalTextInputRef = useRef<HTMLInputElement>(null);
  // const [enteredValue, setEnteredValue] = useState("");
  // const [isValid, setIsValid] = useState(true);

  // const goalInputChangeHandler = (event) => {
  //   event.target.value.trim().length > 0 && setIsValid(true);
  //   setEnteredValue(event.target.value);
  // };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = goalTextInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }
    props.onAddGoal(enteredText);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={`form-control invalid}`}>
        {/* <div className={`form-control ${!isValid && "invalid"}`}> */}
        <label htmlFor="text">Course Goal</label>
        <input
          type="text"
          id="text"
          ref={goalTextInputRef}
          // value={enteredValue}
          // onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default NewGoal;
