import React from "react";
import { ListGroup } from "react-bootstrap";

import Celeste from "./Celeste";

const ListaColores = (props) => {
  return (
      <div className="col-12 col-md-4">
    <ListGroup >
     
        {props.arregloColor.map((item, posicion) => (
          <Celeste key={posicion} colorCargado={item} borrarColor={props.borrarColor}></Celeste>
        ))}

    </ListGroup>
    </div>
  );
};

export default ListaColores;
