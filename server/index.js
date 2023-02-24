const express = require("express");
const imageRoutes = require("./routes/image.routes");

const app = express();

app.use(express.json());

app.use(imageRoutes);

const { PORT } = process.env || 8000;

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to Home Page.</h1>");
});

app.listen(PORT,()=>{
    console.log(`Server is running on the localhost port: ${PORT}`);
});