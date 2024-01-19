import { useState } from "react";
import Button from "@mui/joy/Button";

export function Pila(){
    const [cont, setCont] = useState(0);
    function avanzar(){
        if(cont < 100){
            setCont(cont + 1);
        }
        }

        function decrementar(){
            if (cont > 0) {
                setCont(cont - 1);
            }
        }

        function reiniciar(){
            setCont(0)
                }

        function maximo(){
            setCont(100)
        }
        return(
            <>
            <div>La pila está al: {cont} %</div>
            <Button variant="solid" color="primary" onClick={avanzar}>
              Incrementar
            </Button>
            <Button variant="solid" color="primary" onClick={decrementar}>
              Decrementar
            </Button>
            <Button variant="solid" color="primary"onClick={reiniciar}>
              Reiniciar
            </Button>
            <Button variant="solid" color="primary" onClick={maximo}>
              Maximo
            </Button>
          </>
        );
}