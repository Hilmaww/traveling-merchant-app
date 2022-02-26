require('dotenv').config({ path: './config.env' });

const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');

const app = express();
const PORT = process.env.PORT || 8080;

const dbo = require('./app/config/con');

var corsOptions = {
    origin: "http://localhost:8081"
  };
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

require('./app/routes/tutorial.routes')(app)

app.get("/", (req, res)=>{
    res.json({message: lol})
})


// app.listen(PORT, ()=>{
//   console.log(`Server is running on  http://localhost:${PORT}`)
// })
dbo.connectToServer(function (err) {
  if (err) {
    console.error(err);
    process.exit();
  }

  app.listen(PORT, ()=>{
      console.log(`Server is running on  http://localhost:${PORT}`)
  })
})

