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
  selectRecipe(recipes, null, searchBar.value);
  searchBar.value = "";
});

searchBar.addEventListener("click", (e) => {
  list.classList.remove("checked");
  list.innerHTML = "";
});
