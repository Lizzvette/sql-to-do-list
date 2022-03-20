// // Created stack from Koala example
// const pg = require('pg');


// // connection to Database - all went mad when did this:
// const config ={
//     database: 'weekend-to-do-app',    
//     host: 'localhost',
//     port: 5432;   // NOTE  
// };

// // const pool = new pg.Pool({
// //     database: 'weekend-to-do-app'
// // });


// module.exports = pool;

const pg = require('pg');


const Pool = pg.Pool;
const pool = new Pool({
    //line to sql
    database: 'weekend-to-do-app',
    host: 'localhost',
    port: 5432,
    max: 10, //number of connections
    idleTimeoutMillis: 30000 //30 seconds 
});

pool.on('connect', () => {
    console.log('PG CONNECTED!');
})

pool.on('error', (err) => {
    console.log('PG Error!', err);
})

module.exports = pool;