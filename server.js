const express = require('express');
const path = require('path');

const app = express();
const port = 3025;

app.use(express.static(path.join(__dirname, './build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './build/index.html'));
});

app.listen(port, () => console.log(`APP listening at http://localhost:${port}`));
