import './Clientes.css'
import Table from "../../globalcomponents/table/Table"
import { useState } from 'react';
import AddClient from './components/AddClient';
import { Button } from 'react-bootstrap';

interface IShowComponent {
  show:boolean
  }

function Clientes(){

  const [show, setShow] = useState<IShowComponent>({show:false});



  const handleShow = () => {

    setShow({
      show:!show.show
    })

  }
 
  return (
    <>
    <h1>
    Clientes
    <hr></hr>
    <Button   variant="outline-primary" onClick={() => handleShow()}>Agregar Cliente</Button>

    {show.show&&(<>
    <AddClient></AddClient>
    </>)}

    </h1>
    
    <div id="mainDiv" >
    <Table/>
      </div>
      </>
  )
}


export default Clientes