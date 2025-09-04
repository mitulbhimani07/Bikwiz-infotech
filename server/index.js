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

// Database connection
//mongodb+srv://vidhisavaliya017_db_user:AlZ8HQs5VeWRVAPL@cluster0.nrpq8yk.mongodb.net/
const mongoose = require('mongoose');
    mongoose.connect("mongodb+srv://vidhisavaliya017_db_user:YnbF0P1lVYFWjTA5@clusterone.xbsfufz.mongodb.net/BikwizInfotech?retryWrites=true&w=majority&appName=Clusterone").then((res)=>{
        console.log('DB is Conected');  
    })
    .catch((err) => {
        console.log('Error connecting to the database:', err);
    });
  
// verify the connection
app.get('/', (req, res) => {
  res.send('Server is Running is running...');
});

// Importing routes
app.use('/client', require('./routes/Authentication/ClinetAuthRoutes'));
app.use('/freelancer', require('./routes/Authentication/FreelancerAuthRoutes'));
app.use('/contact',require('./routes/ContactRoutes'))
app.use('/category',require('./routes/Authentication/CategoryRoutes'))
app.use('/blog',require('./routes/Authentication/BlogRoutes'));

// Client Dashboard routes
app.use('/clientdashboard', require('./routes/ClientDashboard/EventRoutes'));
app.use('/Eventcategory',require('./routes/ClientDashboard/EventCategoryRoutes'))

//conecting server backend to Bikwiz-Infotech
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});