const mongoose = require("mongoose");
  
module.exports = () => mongoose.connect(
  process.env.MONGO_URI || "mongodb://localhost/open-source-adam",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
);
