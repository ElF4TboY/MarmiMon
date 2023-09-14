import { selectRecipe } from "./src/function/selectRecipe.js";
import { recipes } from "./src/recipes.js";

const form = document.querySelector("form");
const selectAll = document.querySelectorAll(".select");

selectAll.forEach((select) => {
  select.addEventListener("click", (e) => {
    list.classList.remove("checked");
    list.innerHTML = "";
    selectRecipe(recipes, e.target.id, null);
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!searchBar.value.length) {
    list.innerHTML =
      "<h2>Vous devez rechercher avec un nom de recette ou avec un ingredient</h2>";
  } else {
    selectRecipe(recipes, null, searchBar.value);
    searchBar.value = "";
  }
});

searchBar.addEventListener("click", (e) => {
  list.classList.remove("checked");
  list.innerHTML = "";
});
