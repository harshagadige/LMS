import pool from '../../lib/db';

export default async function handler(req, res) {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query('SELECT 1 + 1 AS result');
    connection.release();

    res.status(200).json({ message: 'Database connected!', result: rows });
  } catch (error) {
    console.error('❌ Database Connection Error:', error);
    res.status(500).json({ message: 'Database connection failed!', error: error.message });
  }
}
