import "./AddClient.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Formik, Form, Field  } from "formik";
import {
  Button,
  Form as FormRB,
  Row,
  Col,
  Container,
  Dropdown,
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

function AddClient() {
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
            <Row>
              <Col>
              <hr />
            <h6>Datos del Humanoide</h6>
            <hr />
              <InputGroup size="sm"  className="mb-3 ">
             <Field name="firstName"   className="inputStyle fieldStyle"  type="text"placeholder="Nombre"/>
            </InputGroup>

            <InputGroup size="sm" className="mb-3">
            <Field name="Apellido"   className="inputStyle fieldStyle"  type="text"placeholder="Apellido"/>
            </InputGroup>

            <InputGroup size="sm" className="mb-3">
              <FormRB.Control
                className="inputStyle"
                placeholder="Cel"
                type="number"
                aria-label="Cel"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <InputGroup size="sm" className="mb-3">
              <FormRB.Control
                className="inputStyle"
                placeholder="Email"
                type="text"
                aria-describedby="basic-addon2"
              />
            </InputGroup>
            <InputGroup size="sm" className="mb-3">
              <FormRB.Control
                className="inputStyle"
                placeholder="Sexo"
                type="text"
                aria-describedby="basic-addon2"
              />
            </InputGroup>
            <InputGroup>
              <FormRB.Control
                as="textarea"
                placeholder="Comentario"
                className="inputStyle"
                aria-label="With textarea"
              />
            </InputGroup>
              </Col>

              <Col>
              <hr />
            <h6>Datos del Vehiculo</h6>
            <hr />

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
              </Col>

            </Row>

          

           
          </Form>
        </Formik>
      </Row>
    </Container>
  );
}

export default AddClient;
