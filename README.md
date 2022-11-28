# stonly interview backend
 creates api tht display and update issue tracker app

# Ports
 
(1)server running on port 2000
(2) client running on port 3000

client on a separate folder
run npm install
to install dependencies

# environment variables
database informations available in the '.env' file in the root folder
env file credentials sent via email.

#  3layers achitecture
(1) dataaccess area contains code that interact with database
(2) service layer folder contains business logic
(3) controller folder used  to connect with routes 
(4) db folder contains connection code to test-mongodb-database


# APIs
#GET /api/issue/
to get all issues

#POST /api/issue
 to create a new issue

 #POST /api/issue/update 
 to update the issue
 npm start to start the app

# Testing
#Jest 
jest was used to test the apis

#PROCESS
(1) Test folder contains the code that test both fetch and update requests
(2)  a separate database was created so test data  are separated from the production data
(3)  test database connection  is located in db folder 
(4) npm test to run the tests (unit testing )




