const express = require('express');
const path = require('path');
const serverless = require('serverless-http')
// const port = process.env.PORT || 3000;

const app = express();

const router = express.Router();


app.use('/.netlify/functions/api', router)

// Serves the static the files
app.use(express.static(path.join(__dirname, 'public')));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


// Routes
router.get('/', (req, res) => {
    res.render('index')
})
router.get('/about', (req, res) => {
    res.render('about')
})
router.get('/events', (req, res) => {
    res.render('events')
})
router.get('/menu', (req, res) => {
    res.render('menu')
})
router.get('/contact', (req, res) => {
    res.render('contact')
})
router.get('/success'), (req, res) => {
    res.render('success')
}
router.get('*', (req, res) => {
    res.render('404');
})



module.exports.handler = serverless(app)

// app.listen(port, (error) => {
//     if (error) {
//         console.log(error)
//     } else
//     console.log(`Server is listening on`, port)
// })