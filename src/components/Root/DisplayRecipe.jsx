import { useState } from "react";

export const DisplayRecipe = ({ recipe, value }) => {
  return (
    <div className="recipe-container">
      <h2>{recipe.name}</h2>
      <ul>{recipe.ingredients}</ul>
      <p>{recipe.description}</p>
    </div>
  );
};

{
  /* <h2>
Vous devez rechercher avec un nom de recette ou avec un nom
ingrédient, pour le nom de recette tapez 'recipe'.
</h2> */
}
