import './App.css'
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./pages/Header";
import Recipe from "./pages/Recipe/Recipe";
import Popular from "./pages/Popular/Popular";
import Healthy from "./pages/Healthy/Healthy";
import Scores from "./pages/Scores/Scores";
import Search from "./pages/Search/Search";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/recipe-book" element={<Header/>}/>
        <Route path="/recipe/:recipeid" element={<Recipe/>}/>
        <Route path="/popular" element={<Popular/>}/>
        <Route path="/healthy" element={<Healthy/>}/>
        <Route path="/scores" element={<Scores/>}/>
        <Route path="/search/:searchid" element={<Search/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
