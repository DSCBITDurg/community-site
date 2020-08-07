const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
mongoose.connect('mongodb://mongo:27017/communityDB', {useNewUrlParser: true, useUnifiedTopology: true});
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(cors())



app.get('/', (req, res) => {   
    res.json('Hello World I am rohit');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);