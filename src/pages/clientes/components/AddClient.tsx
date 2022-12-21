import './AddClient.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { Formik,  Form } from 'formik';
import {  Button, Form as FormRB, Row, Col ,Container} from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { AiFillSave } from "react-icons/ai";

function AddClient(){
    return (
     

<Container fluid style={{
marginTop:'15px',


}}>
  <hr/>
<Row  xs={1} md={3} className="justify-content-md-center">

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
 <InputGroup size="sm"className="mb-3 "  >
       
        <FormRB.Control
          className='inputStyle'
          placeholder='Nombre'       
          type="text"
          aria-label="Nombre"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup size="sm" className="mb-3">
        
        <FormRB.Control
          className='inputStyle'     
          placeholder='Apellido'            
          type="text"
          aria-label="Apellido"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup  size="sm"className="mb-3">
     
        <FormRB.Control
           className='inputStyle' 
           placeholder='Cel'    
          type="number"
          aria-label="Cel"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup size="sm" className="mb-3">
        <FormRB.Control
         className='inputStyle' 
          placeholder="Email"
          type="text"
          aria-describedby="basic-addon2"
        />
      </InputGroup>    
      <InputGroup size="sm" className="mb-3">
        <FormRB.Control
         className='inputStyle' 
          placeholder="Email"
          type="text"
          aria-describedby="basic-addon2"
        />
      </InputGroup> 
      <InputGroup>
        <FormRB.Control as="textarea"
        placeholder='Comentario'
        className='inputStyle' 
        aria-label="With textarea" />
      </InputGroup>
    <button type="submit" className="btnSave">
    <AiFillSave/>
    </button>
      
      </Form>
    </Formik>
  
   
    </Row>
    </Container>
  
      )
} 

export default AddClient