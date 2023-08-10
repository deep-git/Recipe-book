import React from 'react';
import Recipe from "../../pages/Recipe/Recipe";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./Card.css";

export default function Card({recipe}) {
  return (
    <div className="card_container">
        <div className="recipe_card">
            <img src={recipe.image} alt="Recipe" className="recipe_image"/>
            <div className="text_content">
              <Link to={`../recipe/${recipe.id}`} state={{recipe: recipe}}>
                <h1>{recipe.title}</h1>
              </Link>
                <div>
                <p className="recipe_calories">{recipe.nutrition && recipe.nutrition.nutrients[0].name}:  
                {recipe.nutrition && " " + recipe.nutrition.nutrients[0].amount} 
                {recipe.nutrition && recipe.nutrition.nutrients[0].unit}</p>

                <p className="recipe_proteins">{recipe.nutrition && recipe.nutrition.nutrients[8].name}:  
                {recipe.nutrition && " " + recipe.nutrition.nutrients[8].amount} 
                {recipe.nutrition && recipe.nutrition.nutrients[8].unit}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
