import './Servicios.css'
import { useState } from 'react';
import AddService from './components/AddService/AddService';

import { AiOutlineUserAdd } from "react-icons/ai";

interface IShowComponent {
  show:boolean
  }

function Servicios(){

  const [show, setShow] = useState<IShowComponent>({show:false});


  const handleShow = () => {

    setShow({
      show:!show.show
    })

  }
 
  return (
    <>
    <h1>
    Servicios
    </h1>
    <hr></hr>
    <div className='titleAdd'>
    <button
    className='btnAdd'
    onClick={() => handleShow()}
    >
      <AiOutlineUserAdd
      size="25"
      />
    </button>
    <h6>Alta Servicio</h6>
    </div>
    
    {show.show&&(<>
    <AddService></AddService>
    </>)}


    
  
      </>
  )
}


export default Servicios