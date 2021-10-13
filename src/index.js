//pasos para tener una app react
//1. Estar la variable React en scope (es cargar libreria o importar)
import React from "react";
//2. Estar la variable ReactDOM en scope (es cargar libreria o importar)
import  ReactDOM  from "react-dom";
//3. Tener un elemento
const Elemento = () => <p>Hola Mundo</p>
//4. Renderizar el elemento
ReactDOM.render(<Elemento/>, document.getElementById("root"));
//fsadfd


 