import "./Order.css";
import { Formik, Form } from "formik";
import { Form as FormRB, Row, Container, Col } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import { AiFillSave } from "react-icons/ai";
import ListGroup from "react-bootstrap/ListGroup";
import VehicleStatusInitial from "./Components/VehicleStatusInitial/VehicleStatusInitial";

function Orden() {
  return (
    <Container
      fluid
      style={{
        marginTop: "15px",
      }}
    >
      <hr />

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
          <Row xs={1} md={2} className="justify-content-md-center">
            <Col>
              <h6>Listado de Clientes</h6>
              <hr></hr>
              <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <h6>Vehiculo</h6>
              <hr></hr>
              <FormRB.Select size="sm">
                <option>Seleccionar</option>
                <option value="1">KTM RC 200</option>
                <option value="2">KTM 390</option>
              </FormRB.Select>

            <div className="disabledElement">
              <InputGroup size="sm" className="mb-3 mt-2">
                <FormRB.Control
                  className="inputStyle"
                  placeholder="Patente"
                  type="text"
                  aria-label="Descripcion"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

              <InputGroup size="sm" className="mb-3 mt-2">
                <FormRB.Control
                  className="inputStyle"
                  placeholder="Chasis"
                  type="text"
                  aria-label="Chasis"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

              <InputGroup size="sm" className="mb-3 mt-2">
                <FormRB.Control
                  className="inputStyle"
                  placeholder="NroMotor"
                  type="text"
                  aria-label="NroMotor"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

              </div>

              <InputGroup size="sm" className="mb-3 mt-2">
                <FormRB.Control
                  className="inputStyle"
                  placeholder="Kilometros"
                  type="number"
                  aria-label="Descripcion"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

              <h6> Orden </h6>
              <FormRB.Check 
        type="switch"
      
        label="Service"
      />
      <FormRB.Check 
        
        type="switch"
        label="Reparacion"
      
      />
              <hr></hr>
              <InputGroup>
                <FormRB.Control
                  as="textarea"
                  placeholder="Comentario"
                  className="inputStyle"
                  aria-label="With textarea"
                />
              </InputGroup>

 
           
                <button type="submit" className="btnSave">
                  <AiFillSave />
                  <sub>Guardar</sub>
                </button>
             
            </Col>
          </Row>
        </Form>
    </Formik>

    <VehicleStatusInitial/>
    </Container>
    
  );
}

export default Orden;
