const mongoose= require("mongoose");

require("dotenv").config(); 

const dbConnect = () => {
    const DB_URI = process.env.MONGO_URI
    mongoose.connect(DB_URI, {})
    .then ( () => console.log("Database connected successfully !! "))
    .catch( (err) => {
        console.log("Issue in db connection ");
        console.log(err.message);

        process.exit(1);
    } )

}

module.exports =  dbConnect;