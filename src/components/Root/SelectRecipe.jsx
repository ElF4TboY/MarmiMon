import { recipes } from "../../database/recipes";
import { DisplayRecipe } from "./DisplayRecipe";

export const SelectRecipe = ({ value, inputIsEmpty }) => {
  // console.log(value);
  return (
    <>
      {inputIsEmpty ? (
        <h2>
          Vous devez rechercher avec un nom de recette ou avec un nom
          d'ingrédient, pour le nom de recette tapez 'recipe'.
        </h2>
      ) : (
        <>
          {recipes
            .filter(
              (recipe) =>
                recipe.classId === value ||
                recipe.name.includes(value) ||
                recipe.ingredients.includes(value)
            )
            .map((recipe, index) => (
              <DisplayRecipe
                key={recipe.name + index}
                recipe={recipe}
                value={value}
              />
            ))}
        </>
      )}
    </>
  );
};
