import { recipes } from "../recipes";

export const getFormData = (form) => {
  const data = new FormData(form);
  const formData = Object.fromEntries(data.entries());
  recipes.push(formData);
  alert(`La recette suivante vient être ajouté : ${JSON.stringify(formData)}.`);
};
