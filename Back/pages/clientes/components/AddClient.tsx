import './AddClient.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { Formik,  Form } from 'formik';
import {  Button, Form as FormRB, Row, Col ,Container} from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
function AddClient(){
    return (
     

<Container fluid  >
<Row xs={1} md={2}>
<Col>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
<Form>
 <InputGroup size="sm"className="mb-3">
        <InputGroup.Text style={{
          color:'white',
          backgroundColor:'#FC7F26'
          
        }} id="basic-addon1">Nombre</InputGroup.Text>
        <FormRB.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="basic-addon1">Apellido</InputGroup.Text>
        <FormRB.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup  size="sm"className="mb-3">
        <InputGroup.Text id="basic-addon1">Cel/WPP</InputGroup.Text>
        <FormRB.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup size="sm" className="mb-3">
        <FormRB.Control
          placeholder="Email"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"

        />
        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
      </InputGroup>

    

      <InputGroup>
        <InputGroup.Text>Comentario</InputGroup.Text>
        <FormRB.Control as="textarea" aria-label="With textarea" />
      </InputGroup>
      <Button  variant='success' type="submit">Guardar</Button>
      </Form>
    </Formik>
    </Col>
    <Col>
    <Button>XXXXX</Button>
    </Col>
    </Row>
    </Container>
  
      )
} 

export default AddClient