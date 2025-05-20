const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./config/mongoDB');
const PORT = process.env.PORT || 3000;
require('dotenv').config();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/client', require('./routes/Authentication/ClinetSignUpRoutes'));
app.use('/freelancer', require('./routes/Authentication/FreelancerSignUpRoutes'));
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});