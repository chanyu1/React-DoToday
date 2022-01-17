import React, { Fragment, useState } from "react";

// import CourseGoalList from "./components/CourseGoals/CourseGoalList";
// import CourseInput from "./components/CourseGoals/CourseInput";
import NewGoal from "./components/Goals/NewGoal";
import Goals from "./components/Goals/Goals";
import Goal from "./models/goal";
import "./App.css";

const App = () => {
  const [goals, setGoals] = useState<Goal[]>([]);

  // const addGoalHandler = (enteredText: string) => {
  //   setCourseGoals((prevGoals) => {
  //     const updatedGoals: any = [...prevGoals];
  //     // Add a goal in front
  //     updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
  //     return updatedGoals;
  //   });
  // };

  const addGoalHandler = (goalText: string) => {
    const newGoal = new Goal(goalText);
    setGoals((prevGoals) => {
      return prevGoals.concat(newGoal);
    });
  };

  // const deleteItemHandler = (goalId: any) => {
  //   setCourseGoals((prevGoals) => {
  //     const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
  //     return updatedGoals;
  //   });
  // };

  // let content =
  //   courseGoals.length > 0 ? (
  //     <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
  //   ) : (
  //     <p style={{ textAlign: "center" }}>No goals found</p>
  //   );

  return (
    <Fragment>
      <section id="goal-form">
        {/* <CourseInput onAddGoal={addGoalHandler} /> */}
        <NewGoal onAddGoal={addGoalHandler} />
      </section>
      <Goals items={goals} />
      {/* <section id="goals">{content}</section> */}
    </Fragment>
  );
};

export default App;
