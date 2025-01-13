const mysql = require('mysql12');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-compelete',
    password: 'root'
});
module.exports = pool.promise();