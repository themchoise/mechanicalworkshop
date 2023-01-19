import "./AddService.css";
import { Formik, Form } from "formik";
import {
  Form as FormRB,
  Row,
  Container,
} from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import { AiFillSave } from "react-icons/ai";

function AddService() {

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

          <FormRB.Select size="sm">
              <option>Tipo</option>
              <option value="1">Venta</option>
              <option value="2">Mantenimiento</option>
              <option value="3">Reparacion</option>
            </FormRB.Select>

            <InputGroup size="sm" className="mb-3 mt-5">
              <FormRB.Control
                className="inputStyle"
                placeholder="Descripcion"
                type="text"
                aria-label="Descripcion"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <InputGroup size="sm" className="mb-3">
              <FormRB.Control
                className="inputStyle"
                placeholder="Valor"
                type="number"
                aria-label="Valor"
                aria-describedby="basic-addon1"
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

export default AddService;
