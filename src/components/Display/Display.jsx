import React, { useState } from 'react';
import Card from "../Card/Card";
import "./Display.css";
import Pagination from "../Pagination/Pagination";

export default function Display({recipes}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(16);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = recipes.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return (
    <div className="recipe_wrapper">
      <div className="grid_recipe_wrapper">
        {recipes && currentPosts && currentPosts.map(items => (
          <div key={items.id}>
            <Card recipe={items}/>
          </div>
        ))}
      </div>
      <Pagination postsPerPage={postsPerPage} totalPosts={recipes.length} paginate={paginate}/>
    </div>
  )
}
