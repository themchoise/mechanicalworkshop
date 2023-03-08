import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './VehicleStatusInitial.css'

function VehicleStatusInitial() {

    return(<>
    

    <Container >
        <h1>ESTADO DE LA UNIDAD</h1>
      <Row className="borderR">
        <Col sm={8}>FECHA RECEPCION</Col>
        <Col sm={4}></Col>
      </Row>
      <Row className="borderNT">
        <Col sm>PUNTO DE VERIFICACIÓN </Col>
        <Col sm>ESTADO	</Col>
        <Col sm>OBSERVACIONES	</Col>
      </Row>
      <Row className="borderNT">
        <Col sm>SISTEMA ELECTRICO:</Col>
        <Col  sm={1}>OBS</Col>
        <Col sm={1}>OK</Col>
        <Col sm></Col>
      </Row>
      <Row className="borderNT">
        <Col sm>FRENOS:</Col>
        <Col  sm={1}>OBS</Col>
        <Col sm={1}>OK</Col>
        <Col sm></Col>
      </Row>
      <Row className="borderNT">
        <Col sm>TRANSMISIÓN:</Col>
        <Col  sm={1}>OBS</Col>
        <Col sm={1}>OK</Col>
        <Col sm></Col>
      </Row>
      <Row className="borderNT">
        <Col sm>CUBIERTAS:</Col>
        <Col  sm={1}>OBS</Col>
        <Col sm={1}>OK</Col>
        <Col sm></Col>
      </Row>
      <Row className="borderNT">
        <Col sm>MANIJA DERECHA/PUNTERA:</Col>
        <Col  sm={1}>OBS</Col>
        <Col sm={1}>OK</Col>
        <Col sm></Col>
      </Row>
      <Row className="borderNT">
        <Col sm>MANIJA IZQUIERDA/PUNTERA:</Col>
        <Col  sm={1}>OBS</Col>
        <Col sm={1}>OK</Col>
        <Col sm></Col>
      </Row>
      <Row className="borderNT">
        <Col sm>KIT HERRAMIENTAS:</Col>
        <Col  sm={1}>OBS</Col>
        <Col sm={1}>OK</Col>
        <Col sm></Col>
      </Row>
      <Row className="borderNT">
        <Col sm>CEDULA DEL VEHICULO:</Col>
        <Col  sm={1}>OBS</Col>
        <Col sm={1}>OK</Col>
        <Col sm></Col>
      </Row>
      <Row className="borderNT">
        <Col sm>CUMBUSTIBLE:</Col>
        <Col sm={4}>Rayas</Col>
        <Col sm></Col>
      </Row>
      <Row style={{height:'90px'}}>
     
    <input type='text' placeholder='COMENTARIO DEL CLIENTE/OBSERVACIONES GENERALES/DAÑOS/ MOTIVO DEL INGRESO'></input>
    
      </Row>
   
      </Container>


    </>)

}




export default VehicleStatusInitial;
