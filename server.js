const express = require('express');
const path = require('path');
const app = express();

app.use('/user', (req, res, next) => {
    res.send('You must be logged in');
});

app.use((req, res, next) => {
    res.show = name => {
        res.sendFile(path.join(__dirname, `/views/${name}`));
    };
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.show('home.html');
});

app.get('/home', (req, res) => {
    res.show('home.html');
});

app.get('/user/panel', (req, res) => {
    res.show('user/panel.html');
});

app.get('/user/settings', (req, res) => {
    res.show('user/settings.html');
});

app.use((req, res) => res.show('404.html'));

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
