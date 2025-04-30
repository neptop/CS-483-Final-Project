import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

// handles display app title, user info, and logout button
function Header() {
    const { user, logout } = useContext(AuthContext)
    const navigate = useNavigate();
    
    // handle logout click
    const handleLogout = () => {
        logout(); // clears JWT auth and user info
        navigate("/login") // redirects back to login page
    };

    return (
        <header className = "header">
            <h1>ThoughtStream</h1>
            
            <div className="user-info">
                <span>Welcome, {user?.name || "User"}</span>
                <button onClick={handleLogout} aria-label="Logout">Logout</button>
            </div>
        </header>
    );
}

export default Header;