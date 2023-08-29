import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import React, { useState } from 'react';
import axios from "axios";


function App() {

  const [dogList, setDogList] = useState([]);
  async function getDogs() {
    const results = await axios.get("http://localhost:5001/dogs");
    console.log("Results Data:", results.data);
    setDogList(results.data)
    return null;
  }

  if (dogList.length ===0) getDogs();

  console.log("doglist is", dogList)
  const dogNames = dogList.map(dog=>dog.name)

  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogNames={dogNames} />
        <Routes>
          <Route path="/dogs" element={ <DogList dogList={dogList} />} />
          <Route path="/dogs/:name" element={ <DogDetails />} />
          <Route path="*" element={ <Navigate to="/dogs" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

async function getDogs() {
  const results = await axios.get("http://localhost:5001/dogs");
  console.log("Results Data:", results.data);
  return results.data;
}

export default App;
