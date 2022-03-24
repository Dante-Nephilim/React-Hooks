import { createContext } from "react";

const initialState = {
  firstName: "Prem Sagar",
  lastName: "Sakkara",
};
const context = createContext<typeof initialState>(initialState);
export type UserState = typeof initialState;
export default context;
