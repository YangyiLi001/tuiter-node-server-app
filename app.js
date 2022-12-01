import mongoose from "mongoose";
import express from 'express';
import cors from 'cors';

import HelloController
    from "./controllers/hello-controller.js"
import UserController
    from "./controllers/users/users-controller.js"
import TuitsController
    from "./controllers/tuits/tuits-controller.js";

// const express = require('express')
// const DB_CONNECTION_STRING = "mongodb+srv://yangyili1994:supersecretpassword@cluster0.4zgikds.mongodb.net/tuiter?retryWrites=true&w=majority"

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/tuiter'
console.log(CONNECTION_STRING)
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(cors())
app.use(express.json());
TuitsController(app);
HelloController(app);
UserController(app);
app.listen(process.env.PORT || 4000);