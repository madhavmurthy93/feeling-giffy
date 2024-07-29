import express from "express";
import axios from "axios";
import "dotenv/config";

const router = express.Router();
const gifsURL = "https://api.giphy.com/v1/gifs";
const apiKey = process.env.API_KEY;

router.get("/", async (req, res) => {
    try {
        const emotion = req.query.emotion;
        const character = req.query.character;

        // Make giphy request with "character emotion" string
        const params = {
            api_key: apiKey,
            q: `${character} ${emotion}`,
            limit: 20
        }
        const response = await axios.get(`${gifsURL}/search`, { params });
        res.render("index", { gifs: response.data, emotion: emotion, character: character });
    } catch (err) {
        console.log(err);
        res.status(500).json({error: "Failed to load gifs"});
    }
});

export default router;