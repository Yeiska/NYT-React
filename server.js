const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}


//add routes
app.use(routes);

//Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytDB");

//Start the API server
app.listen(PORT, function(){
    console.log(`listening on PORT ${PORT}!`);
});