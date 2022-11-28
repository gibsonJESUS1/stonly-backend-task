const mongoose = require("mongoose")
const  dotenv = require("dotenv")




  const testDb = ()=>{
    dotenv.config()
      // mongodb&mongoose connection
const username = process.env.MGUSERNAME;
const password = process.env.MGPASSWORD;
const db = process.env.MGDATABASETEST;

mongoose
  .connect(
    `mongodb+srv://${username}:${password}@firstdb.jyeas.gcp.mongodb.net/${db}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("database connected");
  })
  .catch((error) => {
    console.log(error);
  });
  }

  module.exports = testDb;