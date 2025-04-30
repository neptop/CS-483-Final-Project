import { useEffect, useState } from "react";
import api from "../services/api";

function WeatherWidget({location}) {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!location) return;

        const fetchWeather = async () => {
            setLoading(true);
            try {
                const res = await api.get(`/weather?location=${encodeURIComponent(location)}`);
                setWeather(res.data);
                setError(null);
            }
            catch(err) {
                console.error("fetch weather fail:", err);
                setError("unable to fetch weather data");
                setWeather(null)
            } finally {
                setLoading(false);
            }
        };
        fetchWeather();
    }, [location]);

    if (!location) return <p>No location provided</p>;
    if (loading) return <p>Loading weather info for {location}...</p>
    if (error) return <p>{error}</p>

    return (
        <div className="weather-widget">
            <h3>Weather in {weather.location}</h3>
            <p>{weather.condition}, {Math.round(weather.temperature)}*F</p>
        </div>
    );
}

export default WeatherWidget;