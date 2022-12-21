import './Clientes.css'
import Table from "../../globalcomponents/table/Table"
import { useState } from 'react';
import AddClient from './components/AddClient';
import { Button } from 'react-bootstrap';
import { AiOutlineUserAdd } from "react-icons/ai";

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
    <button
    className='btnAdd'
    onClick={() => handleShow()}
    >
      <AiOutlineUserAdd/>
      <sub>Alta cliente</sub>
    </button>
    
    {show.show&&(<>
    <AddClient></AddClient>
    </>)}

    </h1>
    
  
      </>
  )
}


export default Clientes