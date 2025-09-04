const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://vidhisavaliya017_db_user:YnbF0P1lVYFWjTA5@clusterone.xbsfufz.mongodb.net/BikwizInfotech?retryWrites=true&w=majority&appName=Clusterone",)

const db=mongoose.connection;

db.once('open',(err)=>{
    if(err){
        console.log(err)
        return false;
    }
    console.log("db is connected")
})

module.exports=db;