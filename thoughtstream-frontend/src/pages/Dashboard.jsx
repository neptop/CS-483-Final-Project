import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Header from "../components/Header";
import WeatherWidget from "../components/WeatherWidget";
import NewEntryForm from "../components/NewEntryForm";
import DiaryList from "../components/DiaryList";

function Dashboard() {
    const { user } = useContext(AuthContext);

    return (
        <div className="dashboard-page">
            <Header />
            <div className="dashboard-content">
                <h2>Welcome, {user?.name}!</h2>
                <WeatherWidget location="Portland, US" /> {/* temp till user input or diary location */}
                <NewEntryForm />
                <DiaryList />

            </div>
        </div>
    )
}

export default Dashboard;