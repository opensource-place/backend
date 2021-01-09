const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose
        .connect(
            process.env.MONGO_URI || "mongodb://localhost/open-source-adam",
            {
                useNewUrlParser: true,
                useFindAndModify: false,
                useCreateIndex: true,
                useUnifiedTopology: true,
            }
        )
        .then(() => {
            console.log("MongoDb Connection Successful");
        })
        .catch((err) => {
            console.error(err);
        });
};

module.exports = connectDatabase;
