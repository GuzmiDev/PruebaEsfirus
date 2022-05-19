import { useContext } from "react";
import { ElementoContext } from "../context/ElementoContext";

export const ListElements = () => {
  const { elementos, clonarPrimerElemento } = useContext(ElementoContext);

  const handleClick = () => {
    clonarPrimerElemento();
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={handleClick}>
        Clonar
      </button>
      <pre>{JSON.stringify(elementos, null, 2)}</pre>
    </div>
  );
};
