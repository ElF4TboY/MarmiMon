const selectRecipe = (recipes, id, value) => {
  for (let recipe of recipes) {
    if (recipe.classId.includes(id) || recipe.ingredients.includes(value)) {
      list.classList.add("checked");
      list.innerHTML += `<h2>${recipe.name}</h2>
                                  <li>${recipe.ingredients}</li>
                                  <p>${recipe.description}</p>`;
    }
  }
};

export { selectRecipe };
