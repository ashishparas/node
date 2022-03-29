const express = require("express");
const mongoose = require('mongoose');
const app = express();

require('dotenv').config();
const Route = require("./src/Routes/index.js");
// const port = 5000;
mongoose.connect(process.env.URL).then(() => { console.log("Database Connection Stablish Successfully!") });
app.use(express.json());
app.use('/', Route);

app.use('create/user', Route);

app.listen(process.env.PORT, ()=>{ console.log("Connection made successfully") });