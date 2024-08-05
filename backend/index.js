const express = require("express");
const path = require("path");
const cors = require("cors");
const { connection } = require("./db/connection.db");
const { userRouter } = require("./route/userAuth.route");
const { blogRouter } = require("./route/blog.route");

const app = express();

app.use(express.json());
app.use(express.text());
app.use(cors());



// Static files
app.use('/photo', express.static(path.join(__dirname, 'photo')));

// Routes
app.use("/", userRouter);
app.use("/", blogRouter);

app.get("/", (req, res) => {
    res.send("This is home page and multer added");
});

const PORT = process.env.PORT || 1234;

app.listen(PORT, async () => {
    try {
        await connection;
        console.log("Connected to the server");
        console.log(`Server is running at port ${PORT}`);
    } catch (error) {
        console.log(error);
    }
});
