import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    const [name, setName] = useState("");

  return (
    <div className="wrapper">
      <div className="container">
                    <Link to="recipe-book"><h1>Recipe Book</h1></Link>
                    <div className="search">
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="recipe_search" placeholder="Search recipe" />
                        {name.length != 0 ? (
                            <Link to={`../search/${name}`} state={{recipe: name}}>
                                <button><ion-icon name="search-outline"></ion-icon></button>
                            </Link>
                        ) : (
                            <button><ion-icon name="search-outline"></ion-icon></button>
                        )}
                    </div>
                </div>
                <div className="options_wrapper">
                    <Link to="popular">
                    <div className="search_popularity">
                        <ion-icon name="fast-food-outline"></ion-icon>
                        <p>Popular</p>
                    </div>
                    </Link>
                    <Link to="healthy">
                    <div className="search_healthy">
                        <ion-icon name="medkit-outline"></ion-icon>
                        <p>Healthy</p>
                    </div>
                    </Link>
                    <Link to="scores">
                    <div className="search_score">
                        <ion-icon name="star-outline"></ion-icon>
                        <p>Scores</p>
                    </div>
                    </Link>
                </div>
    </div>
  )
}
