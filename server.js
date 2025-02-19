const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors()); // Allow cross-origin requests

const MAPPEDIN_API_URL = "https://api.render.com/deploy/srv-cuqtrclds78s7382o6q0?key=Su-tE1w1Vmc"; // Replace with the actual API URL

// Proxy route
app.get("/map", async (req, res) => {
    try {
        const response = await axios.get(MAPPEDIN_API_URL);
        res.send(response.data);
    } catch (error) {
        res.status(500).send("Error fetching data from Mappedin");
    }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
