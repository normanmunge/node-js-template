const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Daily Express API');
});

app.listen(port, () => {
  `Listening on port ${port}`;
});
// https://stackabuse.com/building-a-rest-api-with-node-and-express/
