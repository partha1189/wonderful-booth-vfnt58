import React, { useContext } from "react";
import { MatchingContext } from "./MatchingContext";

const ChildComp = () => {
  const data = useContext(MatchingContext);
  return (
    <>
      {data.matchingProd}
      <button onClick={data.updateMatchingProd}>change matching</button>
    </>
  );
};

export default ChildComp;
