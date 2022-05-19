import { useContext } from "react";
import { ElementoContext } from "../context/ElementoContext";
import { ItemElement } from "./ItemElement";

export const ListElementBeautiful = () => {
  const { elementos, clonarPrimerElemento } = useContext(ElementoContext);

  const handleClick = () => {
    clonarPrimerElemento();
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={handleClick}>
        Clonar
      </button>
      <ul className="list-group mt-3">
        {elementos.map((e) => (
          <ItemElement key={e.id} element={e} />
        ))}
      </ul>
    </div>
  );
};
