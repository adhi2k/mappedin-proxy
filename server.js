const express = require("express");
const app = express();

// Define a route for "/"
app.get("/", (req, res) => {
    res.send("Mappedin Proxy Server is Running!");
});

// Your existing routes (if any)

// Start the server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
