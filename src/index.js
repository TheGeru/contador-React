import React from "react";
import ReactDOM from "react-dom/client";
import { Contador } from "./components/contador";
import { Texto } from "./components/Texto";
import { Pila } from "./components/Pila";

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
    <Contador />
    <Texto/>
    <Pila></Pila>
    </>

);