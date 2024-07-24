const express = require("express");
const { connection_To_DB } = require("./config/db");
const mongoose = require("mongoose");
const { userRouter } = require("./route/userAuth.route");
require('dotenv').config()

const app = express();
app.use(express.json())
app.use(express.text())


app.use("/", userRouter);
const PORT = process.env.PORT || 5000

app.listen(PORT, async () => {
    try {
        await connection_To_DB
        console.log("connected to database");
        console.log(`Server is running at ${PORT}`);
    } catch (error) {
        console.log(error.message);
    }
})