const mysql = require('mysql2/promise');

// Create the promise-based pool directly
const pool = mysql.createPool({
  host: '3.108.235.1',
  user: 'root',
  database: 'fnsolutions',
  password: 'fnsAdmin@220625',
  waitForConnections: true,
});

module.exports = { promisePool: pool };