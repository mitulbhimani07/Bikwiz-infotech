const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./config/mongoDB');
const PORT = process.env.PORT || 3000;
require('dotenv').config();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use('/client', require('./routes/Authentication/ClinetAuthRoutes'));
app.use('/freelancer', require('./routes/Authentication/FreelancerAuthRoutes'));
app.use('/contact',require('./routes/ContactRoutes'))
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});