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
        <Route path="/recipe-book/" element={<Header/>}/>
        <Route path="/recipe-book/recipe/:recipeid" element={<Recipe/>}/>
        <Route path="/recipe-book/popular" element={<Popular/>}/>
        <Route path="/recipe-book/healthy" element={<Healthy/>}/>
        <Route path="/recipe-book/scores" element={<Scores/>}/>
        <Route path="/recipe-book/search/:searchid" element={<Search/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
