import LoginButton from "../components/LoginButton";

function Login() {
    return (
        <div className="login-page">
        {/* Welcome message and intro text */}
        <h1>Welcome to ThoughtStream</h1>
        <p>Record your thoughts, reflections, and moments.</p>
        <LoginButton />
        </div>
    );
}
// Export the Login component so it can be used in React Router routes
export default Login;