const { Repository } = require("../models");

module.exports = () =>
  Repository.find({}).catch((err) => {
    console.log(err);
    throw new Error("Error when getting repositories");
  });
