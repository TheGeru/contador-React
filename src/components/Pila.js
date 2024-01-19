import React, { useState } from "react";
import Button from "@mui/joy/Button";

const intensidades = ["apagado", "cargado al 25%", "cargado al 50%", "cargado al 75%", "cargado al 100%"];

export function Pila() {
  const [indice, setIndice] = useState(0);

  const aumentarIntensidad = () => {
    if (indice < intensidades.length - 1) {
      setIndice(indice + 1);
    } else {
      // Si ya está en el valor más alto, al aumentar vuelve a apagado
      setIndice(indice);
    }
  };

  const disminuirIntensidad = () => {
    if (indice > 0) {
      setIndice(indice - 1);
    } else {
      // Si ya está apagado, al disminuir va al valor más alto
      setIndice(indice);
    }
  };

  const resetearIntensidad = () => {
    setIndice(0);
  };

  return (
    <div>
      <div>Estado de la luz: {intensidades[indice]}</div>
      <Button variant="solid" color="primary" onClick={aumentarIntensidad}>
        Aumentar
      </Button>
      <Button variant="solid" color="primary" onClick={disminuirIntensidad}>
        Disminuir
      </Button>
      <Button variant="solid" color="primary" onClick={resetearIntensidad}>
        Resetear
      </Button>
    </div>
  );
}