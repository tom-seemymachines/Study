import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = (props) => {
  //Function component
  const [personsState, setPersonsState] = useState({
    persons: [
      { id: "sfsf", name: "Max", age: 28 },
      { id: "vvsa", name: "Manu", age: 29 },
      { id: "safs", name: "Stephanie", age: 26 },
    ],
    otherState: "Some other value",
    showPersons: false,
  });

  const deletePersonHandler = (personIndex) => {
    const persons = personsState.persons.slice();
    //const persons=[...personsState.pesons]; //to avoid mutating original state
    persons.splice(personIndex, 1);
    setPersonsState({ ...personsState, persons: persons });
  };

  const nameChangeHandler = (event, id) => {
    const personIndex = personsState.persons.findIndex((name) => {
      return name.id === id;
    });

    const person = { ...personsState.persons[personIndex] }; //New object without mutating original state
    person.name = event.target.value;

    const persons = [...personsState.persons]; // New array without mutauing original array
    // console.log(persons);
    // console.log(person);
    persons[personIndex] = person; //changing the object in the selected index wih new object 'person'

    setPersonsState({
      ...personsState,
      persons: persons,
    });
  };

  const togglePersonsHandler = () => {
    const doesShow = personsState.showPersons;
    setPersonsState({ ...personsState, showPersons: !doesShow });
  };

  const style = {
    //Inline CSS
    backroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
  };

  let persons = null;

  if (personsState.showPersons) {
    persons = (
      <div>
        {personsState.persons.map((person, index) => {
          return (
            <Person
              click={() => deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => nameChangeHandler(event, person.id)}
            />
          );
        })}
        {/* <Person
          name={personsState.persons[0].name}
          age={personsState.persons[0].age}
        />
        <Person
          name={personsState.persons[1].name}
          age={personsState.persons[1].age}
          // click={switchNameHandler.bind(this, "Max!")}
          changed={nameChangeHandler}
        >
          My Hobbies:Racing
        </Person>
        <Person
          name={personsState.persons[2].name}
          age={personsState.persons[2].age}
        /> */}
      </div>
    );
  }
  return (
    <div className="App">
      <h1>Hi, I'm React app</h1>
      <p>This is really working</p>
      <button style={style} onClick={togglePersonsHandler}>
        Switch Name
      </button>
      {/* {personsState.showPersons ? (
        <div>
          <Person
            name={personsState.persons[0].name}
            age={personsState.persons[0].age}
          />
          <Person
            name={personsState.persons[1].name}
            age={personsState.persons[1].age}
            click={switchNameHandler.bind(this, "Max!")}
            changed={nameChangeHandler}
          >
            My Hobbies:Racing
          </Person>
          <Person
            name={personsState.persons[2].name}
            age={personsState.persons[2].age}
          ></Person>
        </div>
      ) : null} */}
      {persons}
    </div>
  );
  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("h1", null, "Hi, I'm a React App!!!")
  // );
};

export default app;
