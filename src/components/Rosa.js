import React from "react";
import { Button, Card } from "react-bootstrap";
import "../App.css";
import rosa from "../img/rosa.jpg";

const Rosa = () => {
  return (
    <section className="rounded border border-dark card-Efect">
      <div className="py-2 text-center">
        <h3>Rosa</h3>
      </div>
      <div className=" bg-lightblue text-center py-4 mx-0">
        <div>
          <Card.Img
            className="w-50 rounded border border-dark "
            variant="top"
            src={rosa}
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

export default Rosa;
