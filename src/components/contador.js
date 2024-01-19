import { useState } from "react";

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
                <button onClick={avanzar}>Incrementar</button>
                <button onClick={decrementar}>Decrementar</button>
                <button onClick={reiniciar}>Reiniciar</button>
            </>
        );
}