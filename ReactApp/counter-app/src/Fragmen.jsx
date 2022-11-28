// import { Fragment } from "react";
// Se pueden importar fragmentos usando la biblioteca o mediante sintaxis 
// Los objetos no son permitidos como salida de variables 
const nombre = 'Yoariht!!!';
const objeto = {
    'nombre': 'Yoariht',
    'apellido': 'Macedo',
};

const object2String = obj => {

    let result;

    for(let val in obj){
        result += obj[val];
        console.log(result);
    }

    return result;
};

export const Fragmento = () => {


    return (
    <>
        <h1>{ nombre }</h1>
        <code>{ JSON.stringify(objeto) }</code>
        <h3>{ object2String(objeto) }</h3>
        <p>Párrafo del Fragmento</p>
    </>
    );
};