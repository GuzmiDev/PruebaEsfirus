import { useEffect, useRef, useState } from "react";
import { uploadElements } from "../helper/uploadElements";

export const useElement = () => {
  const isMounted = useRef(false);

  const [elementos, setElementos] = useState([
    {
      id: 1,
      name: "mis datos",
      items: [
        { id: 1, name: "elemento1" },
        { id: 2, name: "elemento2" },
      ],
    },
  ]);

  const clonarPrimerElemento = () => {
    setElementos((prev) => {
      const cantidadElementos = prev.length;

      // Copia profunda para evitar la copia de referencia de la propiedad items
      const copiaProfundaPrimerElemento = JSON.parse(
        JSON.stringify({ ...prev[0], id: cantidadElementos + 1 })
      );

      const cantidadItems = copiaProfundaPrimerElemento.items.length;

      copiaProfundaPrimerElemento.items.push({
        id: cantidadItems + 1,
        name: `elemento${cantidadItems + 1}`,
      });

      return [...prev, copiaProfundaPrimerElemento];
    });
  };

  // Mandar a la api los datos guardados.

  useEffect(() => {
    if (!isMounted.current) return;
    uploadElements(elementos);
  }, [elementos]);

  useEffect(() => {
    isMounted.current = true;
  }, []);
  return [elementos, clonarPrimerElemento];
};
