import "./AddClient.css";
import { useState } from "react";
import { Formik, Form, Field  } from "formik";
import {
  Form as FormRB,
  Row,
  Container,

} from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import { AiFillSave } from "react-icons/ai";
import Bikes from "../../../dbtest/bikestes.json";

interface MyFormValues {
  firstName: string;
}


function handleModelSelect(filterModelsRecived: string) {
  if (filterModelsRecived == "") {
    return (
      <FormRB.Select size="sm">
        <option>Seleccionar Modelo</option>
        {Bikes.map((x, index) => (
          <option value={index}>{x.Modelo}</option>
        ))}
      </FormRB.Select>
    );
  } else {
    let result = Bikes.filter((x) =>
      x.Modelo.toLowerCase()
        .trim()
        .includes(filterModelsRecived.toLowerCase().trim())
    );

    return (
      <FormRB.Select size="sm">
        <option>Seleccionar Modelo</option>
        {result.map((x, index) => (
          <option value={index}>{x.Modelo}</option>
        ))}
      </FormRB.Select>
    );
  }
}

function AddBike() {
  const [filterModels, setFilterModels] = useState("");
  const [typeSelected, setTypeSelected] = useState(0);

  const handleTypeSelect = (e: any) => {
    let target: number = Number(e.target.value);
    setTypeSelected(target);
  };
  const initialValues: MyFormValues = { firstName: '' };
  return (
    <Container
      fluid
      style={{
        marginTop: "15px",
      }}
    >
      <hr />
      <Row style={{padding:'35px'}} className="justify-content-md-center">
      
        <Formik
        initialValues={initialValues}
          onSubmit={async (values) => {
          alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            <h6>Datos del Vehiculo</h6>
            <FormRB.Select size="sm" onChange={(e) => handleTypeSelect(e)}>
            
              <option key="1" value="1">
                KTM
              </option>
              <option key="2" value="2">
                Otra
              </option>
            </FormRB.Select>

            {typeSelected !== 2 && (
              <InputGroup size="sm" className="mb-3 mt-2">
                
                <FormRB.Control
                  className="inputStyle"
                  placeholder="Filtrar Modelo"
                  onChange={(e) => setFilterModels(e.target.value)}
                  type="text"
                  aria-describedby="basic-addon2"
                />
              </InputGroup>
            )}

            {typeSelected === 2 && (
              <>
               <InputGroup size="sm" className="mb-3 mt-3">
               <FormRB.Control
                 className="inputStyle"
                 placeholder="Marca"
                 type="text"
                 aria-describedby="basic-addon2"
               />
             </InputGroup>

              <InputGroup size="sm" className="mb-3 mt-3">
                <FormRB.Control
                  className="inputStyle"
                  placeholder="Modelo"
                  type="text"
                  aria-describedby="basic-addon2"
                />
              </InputGroup>
              </>
            )}

            {typeSelected !== 2 && handleModelSelect(filterModels)}

            <InputGroup size="sm" className="mb-3 mt-3">
                <FormRB.Control
                  className="inputStyle"
                  placeholder="NroChasis"
                  type="text"
                  aria-describedby="basic-addon2"
                />
              </InputGroup>

              <InputGroup size="sm" className="mb-3 mt-3">
                <FormRB.Control
                  className="inputStyle"
                  placeholder="NroMotor"
                  type="text"
                  aria-describedby="basic-addon2"
                />
              </InputGroup>

              <InputGroup size="sm" className="mb-3 mt-3">
                <FormRB.Control
                  className="inputStyle"
                  placeholder="Kilometros"
                  type="text"
                  aria-describedby="basic-addon2"
                />
              </InputGroup>

              <InputGroup size="sm" className="mb-3 mt-3">
                <FormRB.Control
                  className="inputStyle"
                  placeholder="Patente"
                  type="text"
                  aria-describedby="basic-addon2"
                />
              </InputGroup>

            <h1>
              <button type="submit" className="btnSave">
                <AiFillSave />
                <sub>Guardar</sub>
              </button>
            </h1>
          </Form>
        </Formik>
      </Row>
    </Container>
  );
}

export default AddBike;
