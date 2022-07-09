const express = require('express');
const app = express();

const mongoose = require('mongoose');
const dotenv = require('dotenv');

const routersUrls = require('./routers/routers');
const cors = require('cors');

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, console.log("DataBase Connected"));

app.use(express.json())
app.use(cors())
app.use('app', routersUrls);



app.listen(5000, console.log("server is up and running"));