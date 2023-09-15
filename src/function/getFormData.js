import { recipes } from "../recipes";

export const getFormData = (data) => {
  const formData = Object.fromEntries(data.entries());

  recipes.push(formData);

  alert(`La recette suivante vient être ajouté : ${JSON.stringify(formData)}.`);
};
