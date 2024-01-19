import { useState } from "react";
import Button from "@mui/joy/Button";

export function Contador(){
    const [cont, setCont] = useState(0);
    function avanzar(){
        setCont(cont + 1);
        }

        function decrementar(){
            setCont(cont - 1);
        }

        function reiniciar(){
            setCont(0)
                }
        return(
            <> 
                <div>El contador es: {cont}</div>
                <Button
                variant="solid"
                color="primary"
                onClick={avanzar}>
                    Avanzar
                </Button>
                <Button
                variant = "solid"
                color = "primary"
                onClick={decrementar}>
                    Decrementar
                </Button>
                
                <Button
                variant = "solid"
                color = "primary"
                onClick={reiniciar}>
                    Reiniciar
                </Button>
            </>
        );
}