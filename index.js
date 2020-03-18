require('dotenv').config();
// yarn add dotenv
// will read from a .env file located at the root of the project
// that is why it is as early as possible in the index.js folder
// but we don't have the .env in the root folder yet
// .env is ignore in gitignore
// add .env at root level
// and merge the key/value pairs into process.env
// executing the line above will read the files in .env file
const server = require("./api/server.js");


// make the port be assigned by the Server 
// adding 'process.env.PORT || ' before the local port number
// Heroku will place the .PORT environment value on their server

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});


// add a 'start' script to package.json that uses node to run the API

//HEROKU
// 1. create new app, name it
// 2. go to deply tab, connect to github repo
// 3. pick branch, enable automatic deploy
// 4. can do manual deploy, will get an error, go to the 'More' menu, view logs
// 5. can add remote repo location with "git remote add (repo name)"
// 6. git push (origin) master, the origin is the place where you want to push, so it can be (repo name)
// 7. find errors, fix them, get deployed

// 