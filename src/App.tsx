import { Fragment, useState } from "react";

import NewGoal from "./components/Goals/NewGoal";
import Goals from "./components/Goals/Goals";
import Goal from "./models/goal";
import "./App.css";

const App = () => {
  const [goals, setGoals] = useState<Goal[]>([]);

  const addGoalHandler = (goalText: string) => {
    const newGoal = new Goal(goalText);
    setGoals((prevGoals) => {
      return prevGoals.concat(newGoal);
    });
  };

  const removeGoalHandler = (goalId: string) => {
    setGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content =
    goals.length > 0 ? (
      <Goals items={goals} onRemoveGoal={removeGoalHandler} />
    ) : (
      <p style={{ textAlign: "center" }}>No goals found</p>
    );

  return (
    <Fragment>
      <section id="goal-form">
        <NewGoal onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">{content}</section>
    </Fragment>
  );
};

export default App;
