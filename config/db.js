// const mysql = require('mysql2/promise');

// // Create the promise-based pool directly
// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   database: 'fnsolutions',
//   password: '',
//   waitForConnections: true,
// });

// module.exports = { promisePool: pool };

  const mysql = require('mysql2/promise');

  (async () => {
    try {
      const connection = await mysql.createConnection({
        host: 'fnsdatabase.clkwcssiqip4.ap-south-1.rds.amazonaws.com',
        user: 'admin',
        password: '5NCVAXM4HqWFkgejQTO4',
        database: 'fnsolutions',
      });

      const [rows] = await connection.execute('SELECT NOW()');
      console.log('Connected! Current time:', rows[0]);

      await connection.end();
    } catch (err) {
      console.error('Connection failed:', err);
    }
  })();