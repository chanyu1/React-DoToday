import NewGoal from "./components/Goals/NewGoal";
import Goals from "./components/Goals/Goals";
import GoalsContextProvider from "./components/store/goals-context";
import "./App.css";

const App = () => {
  // let content =
  //   goals.length > 0 ? (
  //     <Goals />
  //   ) : (
  //     <p style={{ textAlign: "center" }}>No goals found</p>
  //   );

  return (
    <GoalsContextProvider>
      <NewGoal />
      <Goals />
    </GoalsContextProvider>
  );
};

export default App;
