const express = require("express");
const app = express();
const routes = require("./routes/routes.js")

app.get("/",(req,res)=>{
    res.status(200).send("Hello World");
})

app.use("/api/products",routes)

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})