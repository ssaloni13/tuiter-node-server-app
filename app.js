import express from 'express';
import cors from 'cors';
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import mongoose from "mongoose";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://localhost:27017/tuiter'
mongoose.connect(CONNECTION_STRING);


// mongoose.connect('mongodb://localhost:27017');
const app = express();
app.use(cors());
app.use(express.json());
TuitsController(app);
HelloController(app);
UserController(app);
// app.get('/hello', (req, res) => {res.send('Life is good!')})
// app.get('/', (req,res) => {res.send('Welcome to Full Stack Development!')})


app.listen(process.env.PORT || 4000);