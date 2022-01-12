import React, { Fragment, useState } from "react";

import CourseGoalList from "./components/CourseGoals/CourseGoalList";
import CourseInput from "./components/CourseGoals/CourseInput";
import "./App.css";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (enteredText: String) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals: any = [...prevGoals];
      // Add a goal in front
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalId: any) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content =
    courseGoals.length > 0 ? (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    ) : (
      <p style={{ textAlign: "center" }}>No goals found</p>
    );

  return (
    <Fragment>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">{content}</section>
    </Fragment>
  );
};

export default App;
