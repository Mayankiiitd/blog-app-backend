const express = require("express");
const app = express();

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware to parse json request body
app.use(express.json());

//import routes for TODO API
const blog = require("./routes/blog");

//mount the todo API routes
app.use("/api/v1", blog);

//connect to the database
const connectWithDB = require("./config/database");
connectWithDB();


app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
})


//default Route
app.get("/", (req, res) => {
    res.send(`<h1> This is HOMEPAGE</h1>`);
})