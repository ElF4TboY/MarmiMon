const searchRecipe = (recipes, value) => {
  for (let recipe of recipes) {
    if (recipe.ingredients.includes(value)) {
      list.classList.add("checked");
      list.innerHTML += `<h2>${recipe.name}</h2>
                                  <li>${recipe.ingredients}</li>
                                  <p>${recipe.description}</p>`;
    } else if (recipe.ingredients.includes()) {
      list.innerHTML += `<h2>Nous n'avons trouvé aucune recette</h2>`;
    }
  }
};

export { searchRecipe };
