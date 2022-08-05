import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import celeste from "../src/img/celeste.jpg";
import "../src/App.css";
import Form from "react-bootstrap/Form";

const App = () => {
  return (
    <section className="py-5 container ">
      <article className="rounded border border-dark">
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
              //   value={}
            />
          </div>
        </div>
        <div className="py-5 d-flex justify-content-end pe-5">
          <Button variant="primary" className="p-3">
            Guardar
          </Button>
        </div>
      </article>
    </section>
  );
};

export default App;
