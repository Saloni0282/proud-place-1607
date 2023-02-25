const express = require('express');
const app = express();
const hbs  = require('hbs') ;
// const bodyParser = require('body-parser');


const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
const { routes } = require('./models/Details');
const {Detail}=require('./routes/detail');
//->/static/images/pic.jpg
app.use("/static",express.static('public'));
app.use("/", routes)

//(template engine)
app.set('view engine','hbs')
app.set('views', "views")
hbs.registerPartials("views/partials");

//db connection
mongoose.connect('mongodb://localhost/website_tut', () => {
    console.log('Connected to database');
    Detail.create({
      brandName: "Beauty Hub",
    });
       
        
    
});

app.listen(process.env.port | 5556, () => {
    console.log('Server is running');
});
