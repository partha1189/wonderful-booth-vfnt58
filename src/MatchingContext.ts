import { createContext } from "react";

export const MatchingContext = createContext({
  matchingProd: "",
  updateMatchingProd: () => {},
});
