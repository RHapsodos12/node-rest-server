require('./config/config')

const express = require('express')
const app = express()

const mongoose = require('mongoose');

var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use( require('./routes/usuario') );
 

mongoose.connect( process.env.URLDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
.then((resp) => { console.log('Connected to Mongo!!'); })
.catch((error) => { console.log('Error connecting to Mongo', error); });
 

app.listen( process.env.PORT, () => {
    console.log('Listening ', process.env.PORT)
})
