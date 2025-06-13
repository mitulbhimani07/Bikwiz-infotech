const express = require('express');
const cors = require('cors');
const app = express();
// const db = require('./config/mongoDB');
var path = require('path');
const PORT = process.env.PORT || 3000;
require('dotenv').config();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));


const mongoose = require('mongoose');
    mongoose.connect("mongodb+srv://mitulbhimani281:mF6u0wongMtNZE3l@cluster0.t7dse.mongodb.net/BIKWIZ-INFOTECH").then((res)=>{
        console.log('DB is Conected');  
    })
    .catch((err) => {
        console.log('Error connecting to the database:', err);
    });
app.get('/', (req, res) => {
  res.send('Server is Running is running...');
});
app.use('/client', require('./routes/Authentication/ClinetAuthRoutes'));
app.use('/freelancer', require('./routes/Authentication/FreelancerAuthRoutes'));
app.use('/contact',require('./routes/ContactRoutes'))
app.use('/category',require('./routes/Authentication/CategoryRoutes'))
app.use('/blog',require('./routes/Authentication/BlogRoutes'));
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});