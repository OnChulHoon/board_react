require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const {
    PORT: port = 4000,
    MONGO_URI: mongoURI
} = process.env;

const app = new Koa();
const router = new Router();

app.listen(port, () => {
    console.log("listening to port : ", port);
});

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(mongoURI).then(() => {
    console.log("connected to mongodb");
}).catch((e) => {
    console.error(e);
});