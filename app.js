const express = require('express');
// const bodyParser = require('body-parser');
const path = require('path');
const PORT = 3000;

const app = express();

// Parses the body of the post request
// const urlencodedParser = bodyParser.urlencoded({ extended: false })








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



// app.post('/contact-form', urlencodedParser, (req, res) => {
//     console.log(req.body)
//     res.render('/success')
    
   
    

// })


app.listen(PORT, () => {
    console.log(`Server is listening on`, PORT)
})