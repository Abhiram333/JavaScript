import { React,StrictMode, useState } from "react";
import ReactDOM from "react-dom";


export function Person(props) {
  return (
    <div>
      <h1>Person Details</h1>
      <h3>Name: {props.person.name}</h3>
      <h3>Gender: {props.person.gender}</h3>
      <h3>Age: {props.person.age}</h3>
      <h3>DOB: {props.person.dob}</h3>
      <h3>Address: {props.person.loc}</h3>
      {props.person.loc === "USA"?"*":""}
    </div>
  );
}

export function AddPerson(props) {
   const person1 = props.person;
   const setPerson1 = props.setPerson;
  const [person, setPerson] = useState({});

  function OnSubmit(){
    setPerson1(person)
    
  }

  return (
    <div>
      <h1>Add Person</h1>
      <label>Name:</label>
      <input
        id="name"
        type="text"
        value={person.name}
        onChange={e1 => setPerson({ ...person, name: e1.target.value })}
      />
      <br />
      <label>Gender:</label>
      <input
        id="gender"
        type="text"
        value={person.gender}
        onChange={(e1) => setPerson({ ...person, gender: e1.target.value })}
      />
      <br />
      <label>Age:</label>
      <input
        id="age"
        type="text"
        value={person.age}
        onChange={(e1) => setPerson({ ...person, age: e1.target.value })}
      />
      <br />
      <label>DOB:</label>
      <input
        id="dob"
        type="date"
        value={person.dob}
        onChange={(e1) => setPerson({ ...person, dob: e1.target.value })}
      />
      <br />
      <label>Address:</label>
      <input
        id="loc"
        type="text"
        value={person.loc}
        onChange={(e1) => setPerson({ ...person, loc: e1.target.value })}
      />
      <br />
      <button onClick={OnSubmit} id="clear">Submit</button>
    </div>
  );
}

export default function App() {
  const [person, setPerson] = useState({});
  return (
    <div>
      <AddPerson person={person} setPerson={setPerson} />
      <Person person={person} />
    </div>
  );
}


