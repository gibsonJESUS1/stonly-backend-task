const  express =require( "express")

const cors =require("cors")

//import issues routes
const   createIsuueRoute = require( "./routes/issue.routes")


const app = express()






//prevent creashing and console error
process.on("uncaughtException", function (err) {
  console.error(err);
  console.log("Node NOT Exiting...");
});



//applying body parsers
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//routes middlewares
app.use('/api', createIsuueRoute)

module.exports = app;
