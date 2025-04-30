import "axios";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const fetchWeather = async (location) => {
    try {
        const apiKey = process.env.openWeatherAPIKey;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(location)}&units=imperial&appid=${apiKey}`;
        
        const response = await axios.get(url);
        const data = response.data;

        return {
            condition: data.weather[0].main,
            temperature: data.main.temp,
            location: `${data.name}, ${data.sys.country}`
        };
    } 
    catch(error) {
        console.error("Weather API error: ", error.message);
        return null;
     }
};

export const getWeather = async (req, res) => {
    const location = req.query.location;
    if (!location) {
        return res.status(400).json({ message: "Location required" });
    }

    const weatherData = await fetchWeather(location);
    if(!weatherData){
        return res.status(500).json({ message: "Weather data fetch failed"})
    }

    res.json(weatherData);
};