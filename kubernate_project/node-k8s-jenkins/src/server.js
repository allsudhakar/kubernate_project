const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Hello from Kubernetes!",
        version: process.env.APP_VERSION || "1.0.0",
        hostname: process.env.HOSTNAME || "local"
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "UP"
    });
});

app.get("/api/users", (req, res) => {
    res.json([
        {
            id: 1,
            name: "John"
        },
        {
            id: 2,
            name: "Alice"
        }
    ]);
});

if (require.main === module) {
    app.listen(PORT, "0.0.0.0", () => {
        console.log(`Application running on port ${PORT}`);
    });
}

module.exports = app;