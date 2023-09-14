import { getFormData } from "./src/function/getFormData";

const form = document.querySelector(".create-new-recipe");
const btn = document.getElementById("submitBtn");

form.addEventListener("click", (e) => {
  e.preventDefault();
});

btn.addEventListener("click", () => getFormData(form));
