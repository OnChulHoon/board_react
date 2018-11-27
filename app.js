const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const config = require('./config');
const port = process.env.PORT || 3000

const app = express()

app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.set('jwt-secret', config.secret);

app.get('/', (req, res) =>{
    res.send('hello JWT')
});

app.use('/api', require('./src/routes/api'))

app.listen(port, () => {
    console.log("Express is running on port " + port);
});

mongoose.connect(config.mongodbUri, {useNewUrlParser: true});
const db = mongoose.connection;

db.on('erroe', console.error);
db.once('open', () => {
    console.log('connected to mongodb server');
})
