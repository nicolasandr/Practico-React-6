import React from "react";
// import celeste from "../img/celeste.jpg";
import { Button } from "react-bootstrap";
import "../App.css";
const TarjetaColor = (props) => {
  return (
    <div className="col-4 py-3">
    <section className=" rounded border border-dark card-Efect">
      <div className="py-2 text-center">
        <h3>{props.colorCargado}</h3>
      </div>
      <div className=" bg-lightblue d-flex justify-content-center py-4 mx-0">
        <div className="container-color "
         style={{ backgroundColor: props.arreglobgcolores}}>
        </div>
      </div>
      <div className="py-3 text-center">
        <Button variant="danger" className="p-3" onClick={()=>props.borrarColor(props.colorCargado, props.arreglobgcolores)}>
          Borrar
        </Button>
      </div>
    </section>
    </div>
  );
};

export default TarjetaColor;
