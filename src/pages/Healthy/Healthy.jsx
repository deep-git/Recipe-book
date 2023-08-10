import React, { useState, useEffect } from 'react';
import "./Healthy.css";
import Header from "../Header";
import Card from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";
import Display from "../../components/Display/Display";


export default function Healthy() {
  const [healthyFoods, setHealthyFoods] = useState([]);

  useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&query=${""}&addRecipeInformation=true&sort=healthiness&number=100&addRecipeNutrition=true`)
    .then(res => res.json())
    .then(data => setHealthyFoods(data.results));
  }, []);

  // Pass in healthyFoods as prop to header to display cards

  return (
    <div>
      <Navbar/>
      {healthyFoods && (
        <Display recipes={healthyFoods}/>
      )}
    </div>
  )
}
