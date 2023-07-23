import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './VehicleStatusInitial.css'
import Form from 'react-bootstrap/Form';
import getCurrentDate from '../../../../helpers/moment';


function VehicleStatusInitial() {

  let currDate:string =  getCurrentDate('YYYY-MM-DD') ;

  const handleChecks = () => {
    return(<> 

    <Col  sm={2} className="borderRight">
      
    <Form.Check 
            type={"checkbox"}
            label={"OK"}
          />

    </Col>
    <Col sm={2} className="borderRight"> <Form.Check 
            type={"checkbox"}
            label={"OBS"}
          /></Col>
             <Col style={{'padding':'5px'}}>
             <input className='inputUnitState' type={"text"}/>
             </Col>
  
    </>)}


    return(<>
    

    <Container className='containerUniStatus' fluid >
      
      <Form>
        <h1>ESTADO DE LA UNIDAD</h1>
      <Row  className="borderR">
        <Col sm={3}>FECHA RECEPCION</Col>
        <Col >  <input className='' value={currDate} type={"date"}/></Col>
      </Row>
      <Row className="borderNT">
        <Col sm className="borderRight text-center">PUNTO DE VERIFICACIÓN </Col>
        <Col sm className="borderRight text-center">ESTADO	</Col>
        <Col sm className="borderRight text-center">OBSERVACIONES	</Col>
      </Row>
      <Row  className="borderNT rowheight ">
        <Col sm className="borderRight ">SISTEMA ELECTRICO:</Col>
        {handleChecks()}
      </Row>
      <Row className="borderNT">
        <Col sm className="borderRight">FRENOS:</Col>
        {handleChecks()}
      </Row>
      <Row className="borderNT">
        <Col sm className="borderRight"> TRANSMISIÓN:</Col>
        {handleChecks()}
      </Row>
      <Row className="borderNT">
        <Col sm className="borderRight">CUBIERTAS:</Col>
        {handleChecks()}
      </Row>
      <Row className="borderNT">
        <Col sm className="borderRight">MANIJA DERECHA/PUNTERA:</Col>
        {handleChecks()}
      </Row>
      <Row className="borderNT">
        <Col sm className="borderRight">MANIJA IZQUIERDA/PUNTERA:</Col>
        {handleChecks()}
      </Row>
      <Row className="borderNT">
        <Col sm className="borderRight">KIT HERRAMIENTAS:</Col>
        {handleChecks()}
      </Row>
      <Row className="borderNT">
        <Col sm className="borderRight">CEDULA DEL VEHICULO:</Col>
        {handleChecks()}
      </Row>
      <Row className="borderNT">
        <Col sm>CUMBUSTIBLE:</Col>
        <Col sm={4}>Rayas</Col>
        <Col sm></Col>
      </Row>
      <Row style={{height:'90px'}}>
     
    <input className="bg" type='text' placeholder='COMENTARIO DEL CLIENTE/OBSERVACIONES GENERALES/DAÑOS/ MOTIVO DEL INGRESO'></input>
    
      </Row>
      </Form>
     
      </Container>


   

    </>)

}




export default VehicleStatusInitial;
