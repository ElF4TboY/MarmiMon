let recipes = [
  {
    id: "desserts",
    name: "recipe1",
    ingredients: ["poulet", "patate", "oignon"],
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed asperiores perferendis, quibusdam ducimus corrupti aliquam aut hic repellendus enim deleniti!",
  },
  {
    id: "dishes",
    name: "recipe2",
    ingredients: ["boeuf", "riz", "coriandre"],
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed asperiores perferendis, quibusdam ducimus corrupti aliquam aut hic repellendus enim deleniti!",
  },
  {
    id: "entries",
    name: "recipe3",
    ingredients: ["porc", "frite", "ail", "saumon"],
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed asperiores perferendis, quibusdam ducimus corrupti aliquam aut hic repellendus enim deleniti!",
  },
  {
    id: "dishes",
    name: "recipe4",
    ingredients: ["saumon", "tagliatelle", "fenouil"],
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed asperiores perferendis, quibusdam ducimus corrupti aliquam aut hic repellendus enim deleniti!",
  },
];

const search = document.getElementById("searchBar");
const btn = document.getElementById("btn");
const selectAll = document.querySelectorAll(".select");

// let arrIngredient = []; // ne me sauvergarde que le dernier tableau
let valueSearch = "";

selectAll.forEach((select) => {
  select.addEventListener("click", (e) => {
    valueSearch = e.target.id;
    selectRecipe(valueSearch);
  });
});

search.addEventListener("input", (e) => {
  valueSearch = e.target.value;
});

btn.addEventListener("click", () => {
  selectRecipe(valueSearch);
  testFilter(valueSearch);
});

const testFilter = (x) => {
  recipes.filter((el) => {
    console.log(el.ingredients);
    if (el.ingredients === x) {
      return (document.body.innerHTML += `<h2>${recipes[i].name}</h2>
                                            <li>${recipes[i].ingredients}</li>
                                            <p>${recipes[i].description}</p>`);
    }
  });
};

function selectRecipe(x) {
  for (i = 0; i < recipes.length; i++) {
    for (e = 0; e < recipes[i].ingredients.length; e++) {
      if (recipes[i].ingredients[e] === x || recipes[i].id === x) {
        return (document.body.innerHTML += `<h2>${recipes[i].name}</h2>
                                            <li>${recipes[i].ingredients}</li>
                                            <p>${recipes[i].description}</p>`);
      }
    }
  }
}
