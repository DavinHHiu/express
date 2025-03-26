const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');
const morgan = require('morgan');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

// Configure Handlebars
app.engine('hbs', engine({
    extname: '.hbs',
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

const port = 3000;

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/news', (req, res) => {
    res.render('news');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

