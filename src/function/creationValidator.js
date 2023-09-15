import { getFormData } from "./getFormData";

export const creationValidator = (data) => {
  const formData = Array.from(data.entries());
  let isTrue = true;

  for (const [key, value] of formData) {
    // console.log(value);
    if (value.length === 0 || value === "default") {
      isTrue = false;
    }
  }
  if (isTrue) {
    getFormData(data);
  } else {
    alert("Tous les champs doivent êtres renseigné");
  }
};
