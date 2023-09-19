import { Link } from "react-router-dom";

export const Navigation = ({ page }) => {
  return (
    <>
      {page === "root" ? (
        <h1>
          <Link to={"/create-recipe"}>Créer une nouvelle recette</Link>
        </h1>
      ) : (
        <h1>
          <Link to={"/"}>MarmiMom</Link>
        </h1>
      )}
    </>
  );
};
