// Created stack from Koala example
const pg = require('pg');


// // connection to Database
// const config ={
//     database: 'weekend-to-do-app',    
//     host: 'localhost',
//     port: 5432;   // NOTE  
// };

const pool = new pg.Pool({
    database: 'weekend-to-do-app'
});



module.exports = pool;