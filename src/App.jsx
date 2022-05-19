// 2- Queremos poder copiar el primer elemento y agregarlo como uno nuevo al final
// 3- Queremos añadir un elemento a los items del elemento copiado en el paso 2
// 4- Queremos poder guardar los elementos, llamando a la api para actualizar (inventar el endpoint)

import { ElementoContext } from "./context/ElementoContext";
import { useElement } from "./hooks/useElement";
import { PruebaPage } from "./pages/PruebaPage";

function App() {
  const [elementos, clonarPrimerElemento] = useElement();

  return (
    <ElementoContext.Provider value={{ elementos, clonarPrimerElemento }}>
      <PruebaPage />
    </ElementoContext.Provider>
  );
}

export default App;
