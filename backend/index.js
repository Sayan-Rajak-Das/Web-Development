const express = require("express");
const app = express();

app.post("/register", (req, res)=> {
    console.log("request received")
    return res.sendStatus(200);
}) 

// go to localhost:5000 to get the complete URL
app.get("/", (req,res)=>{
    console.log("get request");
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> { console.log(`Listening on port ${PORT}`)});