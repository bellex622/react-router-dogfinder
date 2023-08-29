import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import React, { useState } from 'react';
import axios from "axios";


function App() {

  async function getDogs() {
    const results = await axios.get("http://localhost:5001/dogs");
    console.log("Results Data:", results.data);
    return results.data;

  }

  const [dogList, setDogList] = useState(getDogs());

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/dogs" element={ <DogList />} />
          <Route path="/dogs/:name" element={ <DogDetails />} />
          <Route path="*" element={ <Navigate to="/dogs" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
