import { creationValidator } from "./src/function/creationValidator";

const form = document.querySelector(".create-new-recipe");
const btn = document.getElementById("submitBtn");

form.addEventListener("click", (e) => {
  e.preventDefault();
});

btn.addEventListener("click", () => {
  const data = new FormData(form);
  creationValidator(data);
});
