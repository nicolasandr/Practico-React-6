import React from "react";

import TarjetaColor from "./TarjetaColor";

const ListaColores = (props) => {
  return (
    <div className="row ">
   
        {props.arregloColor.map((item, posicion) => (
          <TarjetaColor key={posicion} colorCargado={item} borrarColor={props.borrarColor} arreglobgcolores={props.arreglobgcolores[posicion]}></TarjetaColor>
        ))}
    
    </div>
    
  );
};

export default ListaColores;
