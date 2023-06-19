import { CardGroup, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Dashboard.css';

function Dashboard(){
  return (
   <>
   <CardGroup className='crdGroup'>
      <Card className='cardX'>
       
        <Card.Body>
          <Card.Title>Ordenes Abiertas</Card.Title>
          <Card.Text>
            Aca se van a mostrar las ordenes de trabajo pendientes de finalizar
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className='cardX'>
      
        <Card.Body>
          <Card.Title>Clientes</Card.Title>
          <Card.Text>
        Aca se van a mostrar la cantidad de clientes
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className='cardX'>
      
        <Card.Body>
          <Card.Title>Estado del Mes</Card.Title>
          <Card.Text>
           Se va a mostrar un resumen del mes
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
   </>
  )
}


export default Dashboard