const mongoose = require("mongoose");
var uri = "mongodb://localhost:27017/simplefullstack";


mongoose.connect(uri, {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Database Connected'))
    .catch(err => console.log(err));

mongoose.Promise = Promise;

const connection = mongoose.connection;
connection.once("open", function () {
    console.log("MongoDB database connection established successfully");
});

const dataModelSchema = new mongoose.Schema({

    task: String,
    minutes: Number,
    client: String,
    date: Date
});

module.exports = mongoose.model("DataModel", dataModelSchema);