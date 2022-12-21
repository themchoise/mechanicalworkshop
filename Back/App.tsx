import { Routes, Route } from "react-router-dom";
import LoginPage from './pages/login/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProtectedRoute } from "./routes/ProtectedRoute";
import SideBar from "./ui/SideBar";
import './index.css'

function App() {
  return (
   <div >
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="*"
        element={
          <ProtectedRoute>
            <SideBar/>
          </ProtectedRoute>
        }
      />
  
    </Routes>
    </div>
  );
}

export default App;
