import React from "react";

import Celeste from "./Celeste";

const ListaColores = (props) => {
  return (
    <div className="row w-100">
   
        {props.arregloColor.map((item, posicion) => (
          <Celeste key={posicion} colorCargado={item} borrarColor={props.borrarColor}></Celeste>
        ))}
    
    </div>
    
  );
};

export default ListaColores;
