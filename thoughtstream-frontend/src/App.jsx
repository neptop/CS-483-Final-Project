import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/login" element = {
        <Login />
        } 
        />
      <Route path="/dashboard" element = {
        <PrivateRoute> 
          <Dashboard /> 
          </PrivateRoute>
        } 
        />
      <Route path="*" element = {
        <Navigate to = "/dashboard" replace />
        } 
        />
    </Routes>
  );
}

export default App;