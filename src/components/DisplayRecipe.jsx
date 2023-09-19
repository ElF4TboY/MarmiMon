export const DisplayRecipe = ({ recipe }) => {
  return (
    <div className="recipe-container">
      <h2>{recipe.name}</h2>
      <p>glop</p>
      <ul>{recipe.ingredients}</ul>
      <p>{recipe.description}</p>
    </div>
  );
};
