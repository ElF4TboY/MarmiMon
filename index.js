import { selectRecipe } from "./src/function/selectRecipe.js";
import { recipes } from "./src/recipes.js";
import { searchRecipe } from "./src/function/searchRecipe.js";

const form = document.querySelector("form");
const selectAll = document.querySelectorAll(".select");

selectAll.forEach((select) => {
  select.addEventListener("click", (e) => {
    list.classList.remove("checked");
    list.innerHTML = "";
    selectRecipe(recipes, e.target.id);
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  searchRecipe(recipes, searchBar.value);
  searchBar.value = "";
});

searchBar.addEventListener("click", (e) => {
  list.classList.remove("checked");
  list.innerHTML = "";
});
