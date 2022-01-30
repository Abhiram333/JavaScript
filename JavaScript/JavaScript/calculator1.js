import { React,State } from "react";
import ReactDOM from "react-dom";

import App from "./App";

export function Calculator(props) {

  function OnSubmit(){

  }
  return (<div>
  <h1>Simple Calculator</h1>
  <input type="button" onclick="OnSubmit()" value="Calculate" />
  <input id="value" type="text" />
  <input id="sign" type="text" />
  <input id="imput" type="text" />
  <label>
    =
  </label>
  <h10>3</h10>
  </div>)
}


function Element() {
  return (
    <div>
      <Calculator name="Abhiram" gender="Male" age="14" dob="07/04/2007" loc="USA"/>
    </div>
  );
}

ReactDOM.render(<Element />, document.getElementById('root'));