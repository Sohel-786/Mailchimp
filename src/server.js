const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/static', express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const homepageController = require('./controllers/homepage.controller');
app.use('/home', homepageController);

app.listen(2345, async(req, res)=>{
    console.log('Listening on port 2345');
})