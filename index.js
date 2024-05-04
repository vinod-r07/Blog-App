const express= require("express");
const routes= require("./routes/blogRouter");
const dbConnect= require("./config/database")
const app= express();

var bodyParser = require('body-parser')


// parse application/json
app.use(bodyParser.json());

// server starting
require("dotenv").config();
app.listen(process.env.PORT || 3000, ()=>{
    console.log("App running on port 3000!");
});


// routing
app.use("/api/v1", routes);

// database connection
dbConnect();

//default route
app.get("/", (re, res) => {
    res.send(`<h1> My Blog </h1> <p> Welcome in this blogging app </p> `);
})




