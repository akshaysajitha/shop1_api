const express = require("express");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes); // API path: /api/users/register

app.get("/", (req, res) => {
    res.send("API is running...");
});

module.exports = app;
