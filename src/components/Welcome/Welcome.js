import React from "react";
 
const Welcome = ({nombre}) => {
const hug = nombre === "desarrollador" ? "desarrollador eres un crack" : nombre;

    return(
        <div>
            <h2>Bienvenido {hug}</h2>
            <p>Esta es un componente moduralizado</p>
            
        </div>
    )
};
    export default Welcome;