const express = require("express")
const app = express()
const cors = require("cors")
const { userRouter } = require("./route/userAuth.route");
const { connection } = require("./db/connection.db");
const { blogRouter } = require("./route/blog.route");
app.use(express.json())
app.use(express.text())
app.use(cors())



app.use("/", userRouter);
app.use("/", blogRouter);

app.get("/", (req, res)=>{
    res.send("This is home page")
})


const PORT = process.env.PORT || 1234;

app.listen(PORT, async () => {
    try {
        await connection
        console.log("Connected to the server ");
        console.log(`Server is running at port ${PORT}`);
    } catch (error) {

        console.log(error);
    }
})