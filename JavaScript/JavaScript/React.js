import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

export function Person(props) {
  return <h1>Hello {props.name}</h1>;
}

export function PersonGender(props) {
  return <h1>You Are {props.gender}</h1>;
}

export function PersonAge(props) {
  return <h1>You Are {props.age}</h1>;
}

export function PersonDob(props) {
  return <h1>Your Birthday Is {props.dob}</h1>;
}

export function PersonLoc(props) {
  return <h1>You Live At {props.loc}</h1>;
}

function Element() {
  return (
    <div>
      <Person name="Abhiram" />
      <PersonGender gender="Male" />
      <PersonAge age="14" />
      <PersonDob dob="07/04/2007" />
      <PersonLoc loc="USA" />
    </div>
  );
}

ReactDOM.render(<Element />, document.getElementById('root'));