import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { ReactNode } from "react";



export const ProtectedRoute = ({ children }:any) => {
  const { user }:any = useAuth();
 
  // INVERTIR ESTO PARA HABILITAR EL LOGIN

  if (user) {
    // user is not authenticated

   
     return <Navigate to="/login" />;
  }
  return children;
};