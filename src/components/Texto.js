import { useState } from "react";

export function Texto(){

    var [texto, setTexto]= useState("Encendidito");
    function switch2(){
        if( texto === "Encendidito"){
            setTexto("Apagadito");
        } else {
            setTexto("Encendidito");
        }
    }
    return(
        <>
        <div>{texto}</div>
        <button onClick={switch2}>{texto}</button>
        </>
    )
}