const mongoose = require('mongoose')

require('dotenv').config();

const connectWithDB=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(console.log("DB connected succesfully"))
    .catch((error)=>{
        console.log("Error connecting to database");
        console.log(error);
        process.exit(1);
    })
}
module.exports = connectWithDB;