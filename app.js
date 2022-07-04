const express = require('express');
const path = require('path')
const PORT = 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/events', (req, res) => {
    res.render('events')
})
app.get('/contact', (req, res) => {
    res.render('contact')
})

app.listen(PORT, () => {
    console.log('Server is listening', PORT)
})