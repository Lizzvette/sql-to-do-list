
// console.log
// server.js basic set up
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const router = require('./routes/task.router')

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

// ROUTE
///const askRouter = require('./routes/task.router');  /////////
//const taskRouter = require('./routes/task.router'); /////////
app.use('/tasks', router)   /// ********

// listen for requests on port
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});