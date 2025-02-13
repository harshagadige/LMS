// import mysql from 'mysql2/promise';

// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: '1234',
//   database: 'lms',
// });

// export default pool;

import mysql from 'mysql2/promise';

// ✅ Create a database pool (modify with your actual DB credentials)
const pool = mysql.createPool({
  host: 'localhost',       // Change this to your database host
  user: 'root',            // Your database username
  password: 'Tbdam@583225',            // Your database password
  database: 'lms', // Your database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;

  


