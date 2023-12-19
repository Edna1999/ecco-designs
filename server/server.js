const express = require('express');
const bodyParser = require('body-parser');
const emailRoute = require('./routes/emailRoute.js');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', emailRoute);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
