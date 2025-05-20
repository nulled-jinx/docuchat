const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const chatRoutes = require("./routes/chat");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use("/api/chat", chatRoutes);

const PORT = process.env.PORt || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
