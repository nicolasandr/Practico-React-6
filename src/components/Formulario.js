import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import ListaColores from "./ListaColores";
import { SketchPicker } from "react-color";

const Formulario = () => {
  const [arregloColor, setarregloColor] = useState([]);
  const [color, setcolor] = useState("");

  const [colores, setcolores] = useState("#000");
  const [showColorPiker, setshowColorPiker] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setarregloColor([...arregloColor, color]);
    setcolor("");
  };

  //borrar un color
  const borrarColor = (color) => {
    let arregloModificado = arregloColor.filter((elemento) => {
      return elemento !== color;
    });
    //actualizar state
    setarregloColor(arregloModificado);
  };

  return (
    <section className="py-5 container ">
      <article className="rounded border border-dark card-Efect">
        <Form onSubmit={handleSubmit}>
          <div className="py-3 ps-5 pb-4">
            <h2 className="display-6">Administrar colores</h2>
          </div>
          <div className="row py-5 container bg-lightblue mx-0">
            <div className="col-md-4 p-2 p-md-2 text-center">
              <div>
                <div
                  className="container-color"
                  style={{ backgroundColor: `${colores}` }}
                  onClick={() =>
                    setshowColorPiker((showColorPiker) => !showColorPiker)
                  }
                >
                  {showColorPiker}
                </div>

                {showColorPiker && (
            
                  <SketchPicker
                    color={colores}
                    onChange={(updatedCpolor) => setcolores(updatedCpolor.hex)}
                  ></SketchPicker>
                
                )}
              </div>
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
        <ListaColores
          arregloColor={arregloColor}
          borrarColor={borrarColor}
        ></ListaColores>
      </div>
    </section>
  );
};

export default Formulario;
