import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";
import "./SideBar.css";
import logonoBg from "../static/logonobg.png";
import { Link, Routes, Route } from 'react-router-dom';
import Clientes from '../pages/clientes/Clientes';
import { Container } from "react-bootstrap";
import { FiUserPlus, FiTool } from "react-icons/fi";
import Dashboard from "../pages/dashboard/Dashboard";
import Servicios from '../pages/servicios/Servicios';
import Orden from "../pages/orden/Orden";



function SideBar({ children }:any) {
   const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();

  return (

    <div style={{  display: 'flex', height: '100%', border:'2px solid green', minHeight: '100vh' }}>
    
      <Sidebar
      breakPoint='xs'
        backgroundColor="#0f151e"
        width='190px'
        
        style={{
          
         border:'none',
          color: "#ffeddf",
          fontSize: "16px",
        
          
          
          
          
        }}
      >
        
        <button onClick={() => collapseSidebar()}>Collapse</button>
     
        <Menu>
        <MenuItem routerLink={ <Link to="/">Dashboard</Link>}> Dashboard</MenuItem>
          <MenuItem icon={<FiUserPlus/>} routerLink={ <Link to="/Clientes">Clientes</Link>}> Clientes</MenuItem>
          <MenuItem icon={<FiUserPlus/>} routerLink={ <Link to="/Servicios">Servicios</Link>}> Servicios</MenuItem>
          <MenuItem icon={<FiTool/>} routerLink={ <Link to="/Orden">Orden</Link>}> Orden</MenuItem>
          <SubMenu label="Informacion">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
        </Menu>
        <div className="logoContainer">
          <img src={logonoBg}></img>
        </div>
       
        
      </Sidebar>
        <main>
          
        </main>
        <div className="divCenter">
      <Container fluid className="mainContainer">
         <div>
          {broken && (
            <button className="sb-button" onClick={() => toggleSidebar()}>
              Toggle
            </button>
          )}
        </div>
      <Routes>
        <Route path="/Clientes" element={<Clientes />} />
        <Route path="/DashBoard" element={<Dashboard/>} />
        <Route path="/Servicios" element={<Servicios/>} />
        <Route path="/Orden" element={<Orden/>} />
        <Route path="/" element={<Dashboard/>} />
      </Routes>
      </Container>
      </div>
 
      
    </div>
  );
}

export default SideBar;
