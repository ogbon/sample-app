const express = require('express');
require('dotenv').config()
const app = express();

const port = process.env.PORT;
app.use('/api', (req, res) => {
  res.send('Hello API!');
});

app.use('/support', (req, res) => {
  res.send('Hello SUPPORT!');
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});



app.listen(port, () => console.log(`App is listening at http://localhost:${port}`))