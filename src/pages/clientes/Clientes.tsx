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
    </h1>
    
    <hr/>
    <Table></Table>
    <hr/>
    <div className='titleAdd'>
    <button
    className='btnAdd'
    onClick={() => handleShow()}
    >
      <AiOutlineUserAdd
      size="25"
      />
    </button>
    <h6>Alta cliente</h6>
    </div>
  
    
    {show.show&&(<>
    <AddClient></AddClient>
    </>)}


    
  
      </>
  )
}


export default Clientes