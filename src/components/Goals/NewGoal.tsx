import React, { useRef } from "react";

import Button from "../UI/Button";
import classes from "./NewGoal.module.css";

const NewGoal: React.FC<{ onAddGoal: (text: string) => void }> = (props) => {
  const goalTextInputRef = useRef<HTMLInputElement>(null);

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
      <div className={classes["form-control"]}>
        <label htmlFor="text">Do Today</label>
        <input type="text" id="text" ref={goalTextInputRef} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default NewGoal;
