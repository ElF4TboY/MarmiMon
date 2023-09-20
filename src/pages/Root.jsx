import { useRef, useState } from "react";

import { Navigation } from "../components/Navigation";
import { SelectRecipe } from "../components/Root/SelectRecipe";

export const Root = () => {
  const [show, setShow] = useState(true);
  const [inputIsEmpty, setInputIsEmpty] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef();

  const handleClick = (e) => {
    setInputIsEmpty(false);
    setValue(e.target.id);
    setShow(false);
  };

  const handleSubmit = (e) => {
    if (!inputRef.current.value) {
      setInputIsEmpty(true);
    } else {
      setInputIsEmpty(false);
    }
    setValue(inputRef.current.value);
    inputRef.current.value = "";
    setShow(false);
  };

  return (
    <div>
      <Navigation page={"root"} />
      <div className="search-bar">
        <ul>
          <li type="text" className="select" id="entries" onClick={handleClick}>
            Entées
          </li>
          <li type="text" className="select" id="dishes" onClick={handleClick}>
            Plats
          </li>
          <li
            type="text"
            className="select"
            id="desserts"
            onClick={handleClick}
          >
            Desserts
          </li>
        </ul>
        <form className="search-input" onSubmit={(e) => e.preventDefault()}>
          <input id="searchBar" type="text" name="searchBar" ref={inputRef} />
          <button id="btn" onClick={handleSubmit}>
            Rechercher
          </button>
        </form>
      </div>
      <div id="list" className="checked">
        {show ? (
          <h2>
            Le backend est en cours de réalisation, les données ajoutées ne sont
            pas persistante et n'apparaîtrons pas sur cette page pour le moment.
          </h2>
        ) : (
          <SelectRecipe value={value} inputIsEmpty={inputIsEmpty} />
        )}
      </div>
    </div>
  );
};
