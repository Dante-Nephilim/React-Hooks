import React from "react";
import "./App.css";
import UseContextComponent from "./UseContextComponent";
import UseEffectComponent from "./UseEffectComponent";
import UseReducerComponent from "./UseReducerComponent";
import UseRefComponent from "./UseRefComponent";
import UseStateComponenet from "./UseStateComponenet";
import CustomHooksComponent from "./CustomHookComponent";

function App() {
  return (
    <div>
      <div>UseState</div>
      <UseStateComponenet />
      <div>UseEffect</div>
      <UseEffectComponent />
      <div>Use Context</div>
      <UseContextComponent />
      <div>USe Reducer</div>
      <UseReducerComponent />
      <div>Use Ref</div>
      <UseRefComponent />
      <div>Use Custom Hooks</div>
      <CustomHooksComponent />
    </div>
  );
}

export default App;
