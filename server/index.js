const express = require('express');
const app = express();
const port = 4000;

app.use(express.static('public'));

app.listen(port, () => console.log(`Monster Rolodex listening on port ${port}`));
