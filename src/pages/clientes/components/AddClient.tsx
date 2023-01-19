import "./AddClient.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Formik, Form } from "formik";
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
import Bikes from '../../../dbtest/bikestes.json'


function handleModelSelect (filterModelsRecived:string){

  if ( filterModelsRecived == ''){
    return (  <FormRB.Select size="sm">
    <option>Seleccionar Modelo</option>
    {Bikes.map((x, index)=>(
      <option value={index}>{x.Modelo}</option>
    ))}
  </FormRB.Select> )
  }else{
    let result = Bikes.filter(x => x.Modelo.toLowerCase().trim().includes(filterModelsRecived.toLowerCase().trim()));

    return (  <FormRB.Select size="sm">
    <option>Seleccionar Modelo</option>
    {result.map((x, index)=>(
      <option value={index}>{x.Modelo}</option>
    ))}
  </FormRB.Select> )
  }

 
}

function AddClient() {

  const [filterModels, setFilterModels] = useState('');

 


  return (
    <Container
      fluid
      style={{
        marginTop: "15px",
      }}
    >
      <hr />
      <Row xs={1} md={2} className="justify-content-md-center">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            <InputGroup size="sm" className="mb-3 ">
              <FormRB.Control
                className="inputStyle"
                placeholder="Nombre"
                type="text"
                aria-label="Nombre"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <InputGroup size="sm" className="mb-3">
              <FormRB.Control
                className="inputStyle"
                placeholder="Apellido"
                type="text"
                aria-label="Apellido"
                aria-describedby="basic-addon1"
              />
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
                placeholder="Email"
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

            <hr />
            <h6>Datos del Vehiculo</h6>
            <hr />

            <FormRB.Select size="sm">
              <option>Seleccionar Marca</option>
              <option value="1">KTM</option>
              <option value="2">Bajaj</option>
              <option value="3">Hero</option>
            </FormRB.Select>
           

       
            <InputGroup size="sm" className="mb-3 mt-2">
        
            <p className="mt-1 me-1">Filtro</p>
              <FormRB.Control
                className="inputStyle"
                placeholder="Filtrar Modelo"
                onChange={(e) => (setFilterModels(e.target.value))}
                type="text"
                aria-describedby="basic-addon2"
              />
            </InputGroup>

           {handleModelSelect(filterModels)}

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

export default AddClient;
