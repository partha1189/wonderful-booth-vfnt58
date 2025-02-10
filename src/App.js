import { useState } from "react";
import ChildComp from "./ChildComp";
import { MatchingContext } from "./MatchingContext";
import "./styles.css";

export default function App() {
  const updateMatchingProd = () => {
    setData((prevData) => ({
      matchingProd: prevData.matchingProd === "test" ? "NEW" : "OLD",
      updateMatchingProd,
    }));
  };
  const [data, setData] = useState({
    matchingProd: "test",
    updateMatchingProd,
  });
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <MatchingContext.Provider value={data}>
        <ChildComp />
      </MatchingContext.Provider>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
