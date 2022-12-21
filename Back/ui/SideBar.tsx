import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";
import "./SideBar.css";
import logonoBg from "../static/logonobg.png";
import { Link, Routes, Route } from 'react-router-dom';
import Clientes from '../pages/clientes/Clientes';
import { Container } from "react-bootstrap";
import { FiUserPlus } from "react-icons/fi";

function SideBar({ children }:any) {
   const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();

  return (

    <div style={{  display: 'flex', height: '100%' }}>
    
      <Sidebar
      breakPoint='xs'
        backgroundColor="#161719"
        width='200px'
        
        style={{
           color: "#ffeddf",
          fontSize: "16px",
        }}
      >
        
        <button onClick={() => collapseSidebar()}>Collapse</button>
     
        <Menu>
          <MenuItem icon={<FiUserPlus/>} routerLink={ <Link to="/Clientes">Clientes</Link>}> Clientes</MenuItem>
          <SubMenu label="Informacion">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem> Documentation</MenuItem>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
        </Menu>
        <div className="logoContainer">
          <img src={logonoBg}></img>
        </div>
       
        
      </Sidebar>
        
      <Container fluid
      style={{
        borderRadius:'10px',
        
         boxShadow: '0 15px 15px rgba(0,0,0,.55)',
         width: '100%',
        height: '100%'
      }}>
         <div>
          {broken && (
            <button className="sb-button" onClick={() => toggleSidebar()}>
              Toggle
            </button>
          )}
        </div>
      <Routes>

        <Route path="/Clientes" element={<Clientes />} />
      </Routes>
      </Container>
 
      
    </div>
  );
}

export default SideBar;
