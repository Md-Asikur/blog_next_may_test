const bodyParser = require("body-parser");
const express = require("express");
const { db } = require("./db/db");
const cookieParser = require("cookie-parser")
const dotenv = require("dotenv");
const errorHandler = require("./errorHandler/errorHandler");
const cors = require("cors")
dotenv.config();
const app = express();
app.use(express.json())
app.use(bodyParser.urlencoded())

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(cookieParser());

app.use(errorHandler)

const blogRoutes = require("./routes/blogRoutes")
const userRoutes = require("./routes/userRoutes");

db();
app.use("/blog", blogRoutes)
app.use("/user", userRoutes);
app.listen(5000, () => {
    console.log("Listening in port"+5000)
})