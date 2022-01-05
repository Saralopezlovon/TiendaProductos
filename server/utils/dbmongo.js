const mongoose = require("mongoose");

//const DATABASE_URL = "mongodb://localhost:27017/NASA_INFO"; -> Por seguridad se comenta y se refiere a ella con .env
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

// Eventos
db.on("error", error => console.log(error));
db.once("open", () => console.log("Connection to db MONGOOSE OK!!!"));

module.exports = mongoose;