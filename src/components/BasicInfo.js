import "../App.css";
import React from "react";

// MEDIUM: CREATE A COMPONENT AND IMPORT IT AS BasicInfo
const BasicInfo = ({ person }) => {
  return (
    // VERY EASY: CREATE BASIC INFORMATION
    <div className="App">
      <h2>{person.name}</h2>
      <p>{person.number}</p>
      <p>{person.dob}</p>
    </div>
  );
};

export default BasicInfo;
