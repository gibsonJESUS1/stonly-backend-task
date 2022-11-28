
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const app = require("./app")


dotenv.config()


// mongodb&mongoose connection
const username = process.env.MGUSERNAME;
const password = process.env.MGPASSWORD;
const db = process.env.MGDATABASE;

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



//satting port
const PORT = process.env.PORT || 2000


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})