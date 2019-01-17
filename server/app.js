const express = require('express');
const bodyParser = require('body-parser');
const books = require('./routers/routers');
const cors = require('cors');
const port = 8081;

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', books);


app.listen(port, function () {
  console.log('Server run ' + port);
});
