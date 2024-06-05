"use strict";

//모듈
const express= require('express');
const dotenv = require("dotenv");
dotenv.config();
const app = express();
//라우팅
const home = require('./routes/home');
//앱세팅
app.set('views', "./views");
app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/public`));
app.use(express.urlencoded({ extended : true }));
app.use(express.json());

app.use("/", home); // use : 미들웨어를 등록해주는 메서드

module.exports = app;