import React, { useState, useEffect } from 'react';
import "./Scores.css";
import Header from "../Header";
import Card from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";
import Display from "../../components/Display/Display";

export default function Scores() {
  const [scoresFoods, setScoresFoods] = useState([]);

  useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&query=${""}&addRecipeInformation=true&sort=meta_score&number=100&addRecipeNutrition=true`)
    .then(res => res.json())
    .then(data => setScoresFoods(data.results));
  }, []);

  return (
    <div>
      <Navbar/>
      {scoresFoods && (
        <Display recipes={scoresFoods}/>
      )}
    </div>
  )
}
