const selectRecipe = (recipes, id, value) => {
  for (let recipe of recipes) {
    if (recipe.classId.includes(id) || recipe.ingredients.includes(value)) {
      let arrayIngredients = [];

      recipe.ingredients.map((elem) =>
        arrayIngredients.push(`<li>${elem}</li>`)
      );

      list.classList.add("checked");
      list.innerHTML += `<div class="recipe-container">
                          <h2>${recipe.name}</h2>
                          <ul>${arrayIngredients.join("")}</ul>
                          <p>${recipe.description}</p>
                        </div>`;
    }
  }
  if (!list.innerHTML) {
    list.classList.add("checked");
    list.innerHTML = `<div>
                        <h2>Aucune recette n'a été trouvé</h2>
                      </div>`;
  }
};

export { selectRecipe };
