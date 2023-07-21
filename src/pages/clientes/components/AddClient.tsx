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
import { CustomerInterface } from "../../../interfaces/customerInterface";
import customerPostData from "../../../api/customer/fetchCustomer";






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
  const initialValues: CustomerInterface = { firstname: '', lastname:'',cellphone:0, email:'',sex:'',comment:'' };
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
            customerPostData(values)
            .then(res => (alert(res)))
            .catch(err => (alert(err)))
          }}
        >
          <Form>
            <Row>
              <Col>
              <hr />
            <h6>Datos del Humanoide</h6>
            <hr />
              <InputGroup size="sm"  className="mb-3 ">
             <Field name="firstname"   className="inputStyle fieldStyle"  type="text"placeholder="Nombre"/>
            </InputGroup>

            <InputGroup size="sm" className="mb-3">
            <Field name="lastname"   className="inputStyle fieldStyle"  type="text"placeholder="Apellido"/>
            </InputGroup>

            <InputGroup size="sm" className="mb-3">
            <Field name="cellphone" value=''   className="inputStyle fieldStyle"  type="number"placeholder="Celular"/>
            </InputGroup>

            <InputGroup size="sm" className="mb-3">
            <Field name="email"   className="inputStyle fieldStyle"  type="text"placeholder="E-Mail"/>
            </InputGroup>

            <InputGroup size="sm" className="mb-3">
            <Field name="sex"   className="inputStyle fieldStyle"  type="text"placeholder="Sexo"/>
            </InputGroup>

            <InputGroup size="sm"  aria-label="With textarea" className="mb-3">
            <Field name="comment" as="textarea"  className="inputStyle fieldStyle"  type="textarea"placeholder="Comentario"/>
            </InputGroup>
              </Col>

            </Row>

          
            <h3>
              <button type="submit" className="btnSave">
                <AiFillSave />
                <sub>Guardar</sub>
              </button>
            </h3>
          </Form>
        </Formik>
      </Row>
    </Container>
  );
}

export default AddClient;
