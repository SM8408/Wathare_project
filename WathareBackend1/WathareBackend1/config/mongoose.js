const mongoose = require('mongoose');


//connect to DB
// u01hZm0Q16jaN5cD
mongoose.connect('mongodb+srv://rutujasavdekar:Rutuja@123@wathareexam.0kj39yx.mongodb.net/?retryWrites=true&w=majority&appName=WathareExam', { useNewUrlParser: true ,useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to db"));

db.once('open', function () {
    console.log("Successfully connected to db");
});
