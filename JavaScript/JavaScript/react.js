import { StrictMode } from "react";
import ReactDOM from "react-dom";

export function Person(props) {
  return <h1>Hello, {props.name}</h1>;
}

const divelement = (
  <div>
    <h1>
  Person Form
    </h1>
    Name: <input id="name" type="text" />



<h4>Please enter your gender</h4>

Gender: <input id="gender" type="text" />

<h4>Please enter your date of birth</h4>

Date of Birth: <input id="dob" type="date" />


<h4>Please enter your address</h4>

Address: <input id="loc" type="text" />
    <button type="button" name="button" onclick="Submit('person1')">
            Submit
        </button>
  </div>
);




ReactDOM.render(divelement, document.getElementById("root"));

