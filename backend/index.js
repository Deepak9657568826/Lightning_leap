const express = require("express")
const app = express()

app.get("/", (req, res)=>{
    res.send("This is home page")
})


app.listen(5000, ()=>{
    try {
        console.log("Server is running at port 5000")
    } catch (error) {
        console.log(error);
    }
})