import { Navigate, Route, Routes } from "react-router-dom";
import { ReactNode } from "react";
import Clientes from "../pages/clientes/Clientes";



function DashBoardRoutes(){
return(
    <Routes>                          
    <Route path="/Clientes"  element={<Clientes />} />   
    </Routes>
    )
};

export default DashBoardRoutes;