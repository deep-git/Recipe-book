import React, { useState, useEffect } from "react";
import Card from "../components/Card/Card";
import { Link } from "react-router-dom";
import Recipe from "./Recipe/Recipe";
import Navbar from "../components/Navbar/Navbar";
import Display from "../components/Display/Display";
import Pagination from "../components/Pagination/Pagination";

export default function Header() {
    const [recipe, setRecipe] = useState([]);

    const apiKey = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        try {
            fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=c688beef0ebc4d779243108b8bbda496&query=${""}&sort=random&addRecipeInformation=true&number=100&addRecipeNutrition=true`)
            .then(res => res.json())
            .then(data => {
            if (!data.errors) {
                setRecipe(data.results);
                console.log(data);
            } else {
                setRecipe([]);
            }
        });
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <div className="entire_container">
            <Navbar/>
            {recipe && (
                <Display recipes={recipe}/>
            )}
        </div>
    );
}
