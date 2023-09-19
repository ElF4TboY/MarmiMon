import { useRef, useState } from "react";

import { recipes } from "../database/recipes";
import { Navigation } from "../components/Navigation";
import { DisplayRecipe } from "../components/displayRecipe";

export const Root = () => {
  const [show, setShow] = useState(true);
  const [value, setValue] = useState("");
  const inputRef = useRef();

  const handleClick = (e) => {
    if (e.target.id === "btn") {
      setValue(inputRef.current.value);
      inputRef.current.value = "";
    } else {
      setValue(e.target.id);
    }
    setShow(false);
  };

  return (
    <div>
      <Navigation page={"root"} />
      <div className="search-bar">
        <ul>
          <li type="text" className="select" id="entries" onClick={handleClick}>
            Entées
          </li>
          <li type="text" className="select" id="dishes" onClick={handleClick}>
            Plats
          </li>
          <li
            type="text"
            className="select"
            id="desserts"
            onClick={handleClick}
          >
            Desserts
          </li>
        </ul>
        <form className="search-input" onSubmit={(e) => e.preventDefault()}>
          <input id="searchBar" type="text" name="searchBar" ref={inputRef} />
          <button id="btn" onClick={handleClick}>
            Rechercher
          </button>
        </form>
      </div>
      <div id="list" className="checked">
        {show ? (
          <h2>
            Le backend est en cours de réalisation, les données ajoutées ne sont
            pas persistante et n'apparaîtrons pas sur cette page.
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
                <DisplayRecipe key={recipe.name + index} recipe={recipe} />
              ))}
          </>
        )}
      </div>
    </div>
  );
};
