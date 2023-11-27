const express = require('express');
// const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
// const cookieparser = require('cookie-parser');
const roomRouter = require("./Route/room.js")

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors()); 

mongoose
  .connect(
    "mongodb+srv://jerrinjames2002:jerrin2002@cluster0.elxtatc.mongodb.net/",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err.message);
  });

  app.get("/server",(req,res)=>{
    res.send("Server Started")
  })

  app.use("/api",roomRouter)

  app.listen(4000, () => {
    console.log(`Server listening on http://localhost:4000`);
  });
  