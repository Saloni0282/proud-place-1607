const express = require('express');
const app = express();
const hbs  = require('hbs') ;
// const bodyParser = require('body-parser');

const { routes } = require('./routes/main');

app.use("/", routes)

//(template engine)
app.set('view engine','hbs')
app.set('views', "views")



app.listen(process.env.port | 5555, () => {
    console.log('Server is running');
});
