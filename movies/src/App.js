import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import MovieDetails from "../src/components/MovieDetails";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
