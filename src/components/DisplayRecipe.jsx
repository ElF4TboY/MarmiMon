export const DisplayRecipe = ({ recipe }) => {
  return (
    <div className="recipe-container">
      <h2>{recipe.name}</h2>
      <ul>{recipe.ingredients}</ul>
      <p>{recipe.description}</p>
    </div>
  );
};
