const express = require("express");
const cors = require("cors");
const router = require("./routes/workoutRoutes")
const app = express();

app.use(cors());
app.use(express.json()); 
app.use("/gymdaddy/api/",router);
app.listen(1234,()=>console.log("listening to port 1235"))