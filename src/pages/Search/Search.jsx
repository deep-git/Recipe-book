import React, { useState, useEffect } from 'react';
import { useLocation, Link } from "react-router-dom";
import "./Search.css";
import Card from "../../components/Card/Card";
import Header from "../Header";
import Navbar from "../../components/Navbar/Navbar";
import Display from "../../components/Display/Display";

export default function Search() {
    const {state} = useLocation();
    const {recipe} = state;
    const [searchRecipe, setSearchRecipe] = useState([]);

    useEffect(() => {
        try {
            fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&query=${recipe}&addRecipeInformation=true&number=100&addRecipeNutrition=true`)
            .then(res => res.json())
            .then(data => {
            if (!data.errors) {
                setSearchRecipe(data.results);
                console.log(data);
            } else {
                setSearchRecipe([]);
            }
        });
        } catch (error) {
            console.log(error);
        }
    }, [recipe]);

  return (
    <div>
        <Navbar/>
        {searchRecipe && (
            <Display recipes={searchRecipe}/>
        )}
    </div>
  )
}
