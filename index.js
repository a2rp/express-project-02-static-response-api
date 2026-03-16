const express = require("express");

const app = express();
const PORT = 1198;

app.get("/info", (req, res) => {
    res.json({
        appName: "Static Response API",
        version: "1.0.0",
        status: "running",
        message: "This API returns static application information.",
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
