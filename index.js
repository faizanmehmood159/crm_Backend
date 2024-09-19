const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();
const path = require("path");
const cors = require("cors"); // Importing cors
const Routes = require("./src/routes/index.js");

const app = express();
connectDB();

app.use(cors()); // Using cors middleware
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api", Routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
