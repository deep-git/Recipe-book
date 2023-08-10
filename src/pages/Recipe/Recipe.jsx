import React, { useState, useRef, useEffect } from 'react';
import { useLocation, Link } from "react-router-dom";
import "./Recipe.css";

export default function Recipe() {
    const {state} = useLocation();
    const {recipe} = state;
    let containedIngredients = [];
    let uniqueIngredients = [];
    let counter = 0;
    const divRef = useRef();
    const inputRef = useRef();
    const [name, setName] = useState("");
    const [value, setValue] = useState([]);
    const [currentRecipe, setCurrentRecipe] = useState([]);

    useEffect(() => {
      inputRef.current.addEventListener("click", (event) => {
        event.stopPropagation();
        divRef.current.style.display = "flex";
        divRef.current.style.flexDirection = "column";
      });
      document.addEventListener("click", (event) => {
        divRef.current.style.display = "none";
      })
    });

    useEffect(() => {
      // Set timeout function of 1s to see if name value changes
      // If name value changes, restart timer, if not, then fetch data
      const fetchData = async() => {
        try {
          await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&query=${name}&addRecipeInformation=true&addRecipeNutrition=true&fillIngredients=true`)
          .then(res => res.json())
          .then(data => {
            if (!data.errors) {
              setValue(data.results);
              console.log(data.results);
            } else {
              setValue([]);
            }
          });
        } catch (error) {
          console.log(error);
        }
      }

      const timer = setTimeout(() => {
        fetchData();
      }, 1000);

      return () => clearTimeout(timer);

    }, [name]);

    const searchRecipe = (value) => {
      setName(value);
    }
    
    const uniqueIng = () => {
      if (recipe) {
        recipe.analyzedInstructions[0].steps.map((step, i) => {
          if (step.ingredients) {
            step.ingredients.map(ingredient => {
              containedIngredients.push(ingredient.name);
            })
          }
        })
      }

      uniqueIngredients = [...new Set(containedIngredients)];
    }

  return (
    <div className="recipe_details_wrapper">
      <div className="grid_container">
        <div className="left_container">
          <div className="search_container">
            <div>
            <Link to="/">
              <h1>Recipe Book</h1>
            </Link>
            <div className="search_wrapper">
              <div className="search_options">
                <input type="text" placeholder="Search recipe" ref={inputRef} value={name} onChange={(e) => searchRecipe(e.target.value)}/>
                {name.length != 0 ? (
                    <Link to={`../recipe/${currentRecipe.id}`} state={{recipe: currentRecipe}}>
                      <button><ion-icon name="search-outline"></ion-icon></button>
                    </Link>
                  ) : (
                    <button><ion-icon name="search-outline"></ion-icon></button>
                )}
              </div>
              <div className="dropdown_search" ref={divRef}>
              {name.length != 0 && value && value.map((recipes, i) => (
                <div key={i} onClick={(e) => {
                  setName(recipes.title);
                  inputRef.current.value = recipes.title;
                  setCurrentRecipe(recipes);
                }}>{recipes.title}</div>
              ))}
              </div>
            </div>
            </div>
          </div>
          <div className="recipe_title">
              <h2>{recipe.title}</h2>
          </div>
          <div className="info_container_hide">
            <div className="inline_info_container">
              <div className="recipe_images_hide">
                <img src={recipe.image} alt="Recipe image" />
              </div>
              <div className="recipe_info_column_hide">
              <div className="recipe_stats_hide">
                {recipe && recipe.analyzedInstructions[0].steps.map((step, i) => {
                  if (counter < 1) {
                    uniqueIng();
                  }
                  counter = counter + 1;
                })}

                <div className="recipe_info_stats_hide">
                  {recipe.readyInMinutes && (
                    <p><ion-icon name="time-outline"></ion-icon> {recipe.readyInMinutes} min</p>
                  )}
                  {recipe.servings && (
                    <p><ion-icon name="color-fill-outline"></ion-icon> {recipe.servings} servings</p>
                  )}
                  {recipe.nutrition.nutrients && (
                    <p><ion-icon name="stats-chart-outline"></ion-icon> {recipe.nutrition.nutrients[0].amount} {recipe.nutrition.nutrients[0].unit}</p>
                  )}
                </div>
              </div>
              <div className="all_ingredients_hide">
                <p className="all_ingredients_title_hide">Ingredients:</p>
                <div>
                  {recipe && uniqueIngredients.map((ingredient, j) => (
                    <div key={j}>
                      <p className="each_ingredient_hide"><ion-icon name="pricetag-outline"></ion-icon> {ingredient}</p>
                    </div>
                  ))}
                </div>
              </div>
              </div>
          </div>
        </div>
          <div className="recipe_method">
            <h2>Method</h2>
            <div className="recipe_instructions">
              {recipe && recipe.analyzedInstructions[0].steps.map((step, i) => (
                <div key={i}>
                  <span className="step_number">Step {step.number}.</span> {step.step} 
                  {step.length && (
                    <span className="step_time">{step.length.number} {step.length.unit}</span>
                  )}
                  {step.ingredients.length != 0 && (
                  <div className="ingredients_container">
                    <p>Ingredients //</p>
                    {step.ingredients && step.ingredients.map((ingredient, j) => (
                      <div key={j}>{ingredient.name}</div>
                    ))}
                  </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="right_container">
        <div className="right_info_container">
            <div className="recipe_images">
              <img src={recipe.image} alt="Recipe image" />
            </div>
            <div className="recipe_stats">
              {recipe && recipe.analyzedInstructions[0].steps.map((step, i) => {
                if (counter < 1) {
                  uniqueIng();
                }
                counter = counter + 1;
              })}
              {recipe.readyInMinutes && (
                <p><ion-icon name="time-outline"></ion-icon> {recipe.readyInMinutes} min</p>
              )}
              {recipe.servings && (
                <p><ion-icon name="color-fill-outline"></ion-icon> {recipe.servings} servings</p>
              )}
              {recipe.nutrition.nutrients && (
                <p><ion-icon name="stats-chart-outline"></ion-icon> {recipe.nutrition.nutrients[0].amount} {recipe.nutrition.nutrients[0].unit}</p>
              )}
            </div>
            <div className="all_ingredients">
              <p className="all_ingredients_title">Ingredients:</p>
              <div>
                {recipe && uniqueIngredients.map((ingredient, j) => (
                  <div key={j}>
                    <p className="each_ingredient"><ion-icon name="pricetag-outline"></ion-icon> {ingredient}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
