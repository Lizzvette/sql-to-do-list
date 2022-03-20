const express = require('express');
const router = express.Router();

const pool = require('../modules/pool.js');

// DB CONNECTION   ****************
// GET
// get to-do-list from sql database - send to client
router.get('/', (req, res) => {
    console.log( 'router GET');
    let queryText = `SELECT * FROM "task"`;  // Database Create: tasks ; Koala had priority can take out
    console.log(queryText);
    pool.query(queryText).then(result => { // rows ....result
      res.send(result.rows);
    })
    .catch(error => {
      console.log('error getting task', error);
      res.sendStatus(500);
    });
  }); // end get
// POSTs   *******************
// new task added weekend-to-do-list
router.post('/',  (req, res) => {
  let newTask = req.body;
  console.log(`adding post task`, newTask);
  
  //Query text to insert the new task into the database   
  let queryText = `INSERT INTO "task" ("task", "complete_date") 
                   VALUES ($1, $2)`;

   let isTaskComplete = (newTask.Completed === 'true');   ////
   
   // Option - let

  let queryParams = [
    newTask.Task,   // CASE *************************
    newTask.Completed,
    newTask.Delete
  ];

   // Is database been added to
    pool.query(queryText, queryParams) //[newTask.task, Number(newTask.priority), false])
    .then(result => {   // .then(() => {      ***************
         res.sendStatus(200);
       })
       .catch(error => {  //err   ***********
         console.log(`Error adding new task`, error);
         res.sendStatus(500);   ////
       });
  }); // End Post

// put
router.put('/:id', (req, res) => {
  console.log('in PUT request', req.params.id);  
  let id = req.params.id;
    //console.log(req.body, id);

  //
    let queryText = `
        UPDATE "task"
        SET "completed_status" = true
        WHERE "id" = $1;`;

    const values = [id]; // where and why *************************

    pool.query(queryText, queryParams)
        .then(result => {  // *********************  Is that from koala?
            res.sendStatus(200);
        }).catch(err => {   // *************
          res.sendStatus(500);
});
})
 // PUT ENDS

// delete
router.delete('/:id', (req, res) => {
  console.log(`request to delete id #`, req.params.id);
  
  let queryText = `
      DELETE FROM "task"
      WHERE "id" = $1;
  `;
  //  ******************
  const values = [req.params.id];

  pool.query(queryText, values)
      .then( result => {
          res.sendStatus(200);
      }).catch(err => {
          console.log(err);
          res.sendStatus(500);
      })
});

module.exports = router;  //