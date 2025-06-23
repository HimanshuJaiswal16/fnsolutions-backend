// const mysql = require('mysql2/promise');

// // Create the promise-based pool directly
// const pool = mysql.createPool({
//   host: '3.108.235.1',
//   user: 'root',
//   database: 'fnsolutions',
//   password: 'fnsAdmin_23062025',
//   waitForConnections: true,
// });

// module.exports = { promisePool: pool };

const mysql = require('mysql2/promise');

(async () => {
  try {
    const connection = await mysql.createConnection({
      host: 'fnsolutionsdb.clkwcssiqip4.ap-south-1.rds.amazonaws.com',
      user: 'admin',
      password: 'md1d9M6f0D2fPEEPPZgT',
      database: 'fnsolutions',
    });

    const [rows] = await connection.execute('SELECT NOW()');
    console.log('Connected! Current time:', rows[0]);

    await connection.end();
  } catch (err) {
    console.error('Connection failed:', err);
  }
})();