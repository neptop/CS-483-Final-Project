import express from "express";
import { getWeather } from "../../controllers/weatherController.js";

const router = express.Router();

router.get("/", getWeather); // Expects: location=City,Country

export default router;