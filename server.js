const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors()); // Allow cross-origin requests

const MAPPEDIN_API_URL = "https://app.mappedin.com/map/6795e230965a13000bcdfe69?embedded=true"; // Replace with the actual API URL

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
