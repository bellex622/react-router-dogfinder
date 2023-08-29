import axios from "axios";
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";


function DogList({ dogList }) {
  return (
    <ul>{dogList.map(dog =>
      <li key={dog.name}>name:{dog.name} age:{dog.age}
        <img src={`/${dog.src}.jpg`} />
      </li>)}</ul>
  );

}

export default DogList;