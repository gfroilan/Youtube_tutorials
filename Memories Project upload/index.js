// Full Stack MERN project
// Starting point of server application

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();                                              // Initialze the app 

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));  // Setting up the body parser so that we can properly send our requests
app.use(cors());

// https://www.mongodb.com/cloud/atlas
const CONNECTION_URL = 'mongodb+srv://Yannen:YugiAmane19~@cluster0.88son.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// In real applications your credentials should be secured by using environmental variables
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
    
mongoose.set('useFindAndModify', false); 