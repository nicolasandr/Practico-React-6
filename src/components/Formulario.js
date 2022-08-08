import React, { useState } from "react";
import Form from "react-bootstrap/Form";
// import Rosa from "./Rosa";
// import Violeta from "./Violeta";
// import Celeste from "./Celeste";
import { Button, Card } from "react-bootstrap";
import celeste from "../img/celeste.jpg";
import ListaColores from "./ListaColores";

const Formulario = () => {
  const [arregloColor, setarregloColor] = useState([]);
  const [color, setcolor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("prueba de submit");
    setarregloColor([...arregloColor, color]);
    setcolor("");
  };

//borrar un color 
const borrarColor = (color) =>{
  let arregloModificado = arregloColor.filter((elemento)=>{return elemento != color});
  //actualizar state
  setarregloColor (arregloModificado);
}

  return (
    <section className="py-5 container ">
      <article className="rounded border border-dark card-Efect">
        <Form onSubmit={handleSubmit}>
          <div className="py-3 ps-5 pb-4">
            <h2 className="display-6">Administrar colores</h2>
          </div>
          <div className="row container bg-lightblue mx-0">
            <div className="col-md-4  p-5 p-md-5 text-center">
              <Card.Img
                className="w-75 rounded border border-dark "
                variant="top"
                src={celeste}
              />
            </div>

            <div className="col-md-8 d-flex align-items-center pe-md-5 pb-4">
              <Form.Control
                type="text"
                className="py-3"
                placeholder="Ingrese un color ej Blue"
                onChange={(e) => setcolor(e.target.value.trimStart())}
                value={color}
              />
            </div>
          </div>
          <div className="py-5 d-flex justify-content-end pe-5">
            <Button variant="primary" type="submit" className="p-3">
              Guardar
            </Button>
          </div>
        </Form>
        
      </article>
      <div className="py-5">
       
          <ListaColores arregloColor={arregloColor} borrarColor = { borrarColor }></ListaColores>
      
      </div>
    </section>
  );
};

export default Formulario;
