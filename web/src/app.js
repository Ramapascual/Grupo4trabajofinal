const express = require('express');
const {resolve} = require('path');
const app = express();
const {port, callback} = require('./modules/port');

app.listen(port, callback());

const publicFolder = require('./modules/public');
app.use(express.static(publicFolder));

app.set('views', resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(require('./routes/main.routes'));
app.use('/users' ,require('./routes/users.routes'));
app.use(require('./routes/products.routes'));