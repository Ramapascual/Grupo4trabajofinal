const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 2022;

app.listen(port, () => console.log('Server listening on port ' + port + '...'));

const publicFolder = path.resolve(__dirname, '../public');
app.use(express.static(publicFolder));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(publicFolder, '../views/index.html'));
});

app.get('/login.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/login.html'));
});

app.get('/register.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/register.html'));
});

app.post('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/index.html'));
});

app.post('/login.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/login.html'));
});

app.get('/productCart.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/productCart.html'));
});

app.get('/productDetail.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/productDetail.html'));
});