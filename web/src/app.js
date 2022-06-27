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