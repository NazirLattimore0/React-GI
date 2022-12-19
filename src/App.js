import React from "react";
import BasicInfo from "./components/BasicInfo";

class App extends React.Component {
  //EASY: CREATE CONSTRUCTOR
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          name: "Nazir Lattimore",
          number: "704-444-4444",
          dob: "01/14/2003",
        },
        {
          name: "Micheal Jackson",
          number: "980-254-7473",
          dob: "04/12/2000",
        },
        {
          name: "Kobe Bryant",
          number: "704-567-0983",
          dob: "10/25/1990",
        },
      ],
    };
  }

  //HARD CHALLENGE: Iterates over array using map
  render() {
    return (
      <div>
        {this.state.people.map((person, index) => (
          <BasicInfo key={index} person={person} />
        ))}
      </div>
    );
  }
}

export default App;
