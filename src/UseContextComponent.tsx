import UserContext, { UserState } from "./store";
import { useState, useContext } from "react";

function ContextComponent() {
  const user = useContext<UserState>(UserContext);
  return (
    <div>
      <div>First:{user.firstName}</div>
      <div>Last:{user.lastName}</div>
    </div>
  );
}

export default function useContextComponent() {
  const [user, userSet] = useState<UserState>({
    firstName: "Jane",
    lastName: "Doe",
  });

  return (
    <UserContext.Provider value={user}>
      <ContextComponent />
      <button
        onClick={() =>
          userSet({
            firstName: "Cheesy",
            lastName: "Burger",
          })
        }
      >
        Change Context
      </button>
    </UserContext.Provider>
  );
}
