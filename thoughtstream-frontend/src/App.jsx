import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/login" element = {<Login />} />
      <Route path="/dashboard" element = {isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
      <Route path="*" element = {<Navigate to = {isAuthenticated ? <Dashboard /> : "/login"} replace />} />
    </Routes>
  );
}

export default App;