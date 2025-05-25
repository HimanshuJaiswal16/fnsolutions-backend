const mysql = require('mysql2/promise');

// Create the promise-based pool directly
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'fnsolutions',
  password: '',
  waitForConnections: true,
});

module.exports = { promisePool: pool };