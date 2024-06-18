// src/components/RecipeList.js
import React from 'react';
import './RecipeList.css';

const RecipeList = ({ recipes }) => (
  <div className="list">
    {recipes.map((recipe) => (
      <div className="recipeCard" key={recipe.recipe.uri}>
        <img className="recipeImage" src={recipe.recipe.image} alt={recipe.recipe.label} />
        <h3>{recipe.recipe.label}</h3>
        <p>Calories: {Math.round(recipe.recipe.calories)}</p>
        <p>Ingredients: {recipe.recipe.ingredientLines.length}</p>
      </div>
    ))}
  </div>
);

export default RecipeList;