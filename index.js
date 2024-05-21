require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors') 
const port = 8000;
const db = require('./config/mongoose')
const cookieParser = require('cookie-parser')
//Used for Session Cookie
const passport = require('passport');
const passportJWT = require('./config/passport-jwt-strategy')

app.use(cors({
    origin: '*',
}))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.json());
app.use(passport.initialize());

// Use express router
app.use('/', require('./routes/index'))

app.listen(port, function (error) {
    if (error) {
        console.log(`Error in running the Server. Error is : ${error}`);
        return;
    }
    console.log(`Server is up and running on the port: ${port}`);
})
