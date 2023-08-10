import React, { useState, useEffect } from 'react';
import "./Popular.css";
import Header from "../Header";
import Card from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";
import Display from "../../components/Display/Display";

export default function Popular() {
  const [popularFoods, setPopularFoods] = useState([]);

  useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&query=${""}&addRecipeInformation=true&sort=popularity&number=100&addRecipeNutrition=true`)
    .then(res => res.json())
    .then(data => setPopularFoods(data.results));
  }, []);

  return (
    <div>
      <Navbar/>
      {popularFoods && (
        <Display recipes={popularFoods}/>
      )}
    </div>
  )
}
