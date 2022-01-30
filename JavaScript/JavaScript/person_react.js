import { React,StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

export function Person(props) {
  return (<div>
  <h1>Hello {props.name}</h1>
  <h1>You Are {props.gender}</h1>
  <h1>You Are {props.age}</h1>
  <h1>Your Birthday Is {props.dob}</h1>
  <h1>You Live At {props.loc}</h1>
  </div>)
}

// export function PersonGender(props) {
//   return <h1>You Are {props.gender}</h1>;
// }

// export function PersonAge(props) {
//   return <h1>You Are {props.age}</h1>;
// }

// export function PersonDob(props) {
//   return <h1>Your Birthday Is {props.dob}</h1>;
// }

// export function PersonLoc(props) {
//   return <h1>You Live At {props.loc}</h1>;
// }

function Element() {
  return (
    <div>
      <Person name="Abhiram" gender="Male" age="14" dob="07/04/2007" loc="USA"/>
      <Person name="Srinath" gender="Male" age="11" dob="02/11/2010" loc="USA"/>
    </div>
  );
}

ReactDOM.render(<Element />, document.getElementById('root'));