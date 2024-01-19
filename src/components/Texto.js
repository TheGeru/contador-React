import { useState } from "react";
import Button from "@mui/joy/Button";
export function Texto(){

    var [texto, setTexto]= useState("Encendido");
    function switch2(){
        if( texto === "Encendido"){
            setTexto("Apagado");

        }
    }
    function switch3(){
        if (texto ==="Apagado"){
            setTexto("Encendido");
        }
    }
    return(
        <>
        <div>{texto}</div>
        <Button 
        variant = "solid"
        color="danger"
        onClick={switch2}>
            Apagar
        </Button>

        <Button 
        variant = "solid"
        color="primary"
        onClick={switch3}>
                Encender
        </Button>
        </>
    )
}