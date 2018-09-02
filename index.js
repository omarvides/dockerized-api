const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
  res.json({ salute: 'Hello there!' });
});

app.listen(app.get('port'), () => {
  console.log(`dockerized api is listening in port ${app.get('port')}`)
});

module.exports = app;