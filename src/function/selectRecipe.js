const selectRecipe = (recipes, id, value) => {
  for (let recipe of recipes) {
    if (recipe.classId.includes(id) || recipe.ingredients.includes(value)) {
      list.classList.add("checked");
      list.innerHTML += `<div class="recipe-container">
                          <h2>${recipe.name}</h2>
                          <li>${recipe.ingredients}</li>
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
