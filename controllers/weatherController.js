import "axios";
import dotenv from "dotenv";

dotenv.config();

export const fetchWeather = async (location) => {
    try {
        const apiKey = process.env.openWeatherAPIKey;
    }
}