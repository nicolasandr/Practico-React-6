import React from "react";
import celeste from "../img/celeste.jpg";
import { Button, Card } from "react-bootstrap";
import "../App.css";
const Celeste = () => {
  return (
    <section className="rounded border border-dark card-Efect">
      <div className="py-2 text-center">
        <h3>Celeste</h3>
      </div>
      <div className=" bg-lightblue text-center py-4 mx-0">
        <div>
          <Card.Img
            className="w-50 rounded border border-dark "
            variant="top"
            src={celeste}
          />
        </div>
      </div>
      <div className="py-3 text-center">
        <Button variant="danger" className="p-3">
          Borrar
        </Button>
      </div>
    </section>
  );
};

export default Celeste;
