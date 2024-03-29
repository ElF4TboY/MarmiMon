import { useRef } from "react";

import { Navigation } from "../components/Navigation";

export const CreateRecipe = () => {
  const nameRef = useRef();
  const ingredientsRef = useRef();
  const descriptionRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`La recette suivante sera prochainement ajouté : 
    {
      "classId": "${e.target[0].value}"
      "name": "${e.target[1].value}",
      "ingredients": "${e.target[2].value}",
      d"escription": "${e.target[3].value}"
    }`);
    nameRef.current.value = "";
    ingredientsRef.current.value = "";
    descriptionRef.current.value = "";
  };

  return (
    <div>
      <Navigation />
      <h1 className="title-create-recipe">Ajouter une nouvelle recette</h1>
      <form className="create-new-recipe" onSubmit={handleSubmit}>
        <div className="select-type">
          <div className="selector">
            <label htmlFor="classNameId">Choisir le type de recette</label>
            <select className="input" name="classNameId">
              <option value="default">Choisir</option>
              <option value="entries">Entrée</option>
              <option value="dishes">Plat</option>
              <option value="desserts">Dessert</option>
            </select>
          </div>
        </div>
        <div className="selector">
          <label htmlFor="name">Choisir le nom de la recette</label>
          <input className="input" name="name" type="text" ref={nameRef} />
        </div>
        <div className="selector">
          <label htmlFor="ingredients">Ajouter le ou les ingrédients</label>
          <input
            className="input"
            name="ingredients"
            type="text"
            ref={ingredientsRef}
          />
        </div>
        <div className="selector">
          <label htmlFor="description">Décrire la recette</label>
          <input
            className="input"
            name="description"
            type="text"
            ref={descriptionRef}
          />
        </div>
        <button id="submitBtn">Ajouter la recette</button>
      </form>
      <footer>
        <h2>
          Le backend est en cours de réalisation, les données ajoutées ne sont
          pas persistante et n'apparaîtrons pas sur la page d'affichage des
          recettes.
        </h2>
      </footer>
    </div>
  );
};
