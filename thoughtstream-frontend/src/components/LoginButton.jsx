import { GoogleLogin } from "@react-oauth/google";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function LoginButton() {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLoginSuccess = async (credentialResponse) => {
        try {
            const idToken = credentialResponse.credential;

            // sends the token to backend
            const res = await api.post("/auth/google", {credential:idToken});

            // login then redirect
            login(res.data.token, res.data.user);
            navigate("/dashboard");
        } catch (err) {
            console.error("Login failed:", err);
        }
    };

    return (
        <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={() => console.error("google login error")}
        />
    );
}

export default LoginButton;