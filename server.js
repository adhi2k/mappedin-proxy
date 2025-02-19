const express = require("express");
const app = express();

// Proxy route to hide Mappedin URL
app.get("/mappedin", (req, res) => {
  res.redirect("https://app.mappedin.com/map/6795e230965a13000bcdfe69?embedded=true");
});

// Run the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
