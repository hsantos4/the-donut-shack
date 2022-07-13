const express = require('express');
// const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 3000;

const app = express();


// Serves the static the files
app.use(express.static(path.join(__dirname, 'public')));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


// Routes
app.get('/', (req, res) => {
    res.render('index')
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/events', (req, res) => {
    res.render('events')
})
app.get('/menu', (req, res) => {
    res.render('menu')
})
app.get('/contact', (req, res) => {
    res.render('contact')
})
app.get('/success'), (req, res) => {
    res.render('success')
}
app.get('*', (req, res) => {
    res.render('404');
})




app.listen(port, (error) => {
    if (error) {
        console.log(error)
    } else
    console.log(`Server is listening on`, port)
})