import pool from '../../lib/db';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        const connection = await pool.getConnection();

        // ✅ Check if the email already exists
        const [existingUser] = await connection.query('SELECT id FROM users WHERE email = ?', [email]);
        if (existingUser.length > 0) {
            connection.release();
            return res.status(400).json({ message: 'Email already registered.' });
        }

        // ✅ Insert new user into MySQL database
        const [result] = await connection.query(
            'INSERT INTO users (fullName, email, password) VALUES (?, ?, ?)',
            [fullName, email, password]
        );

        connection.release();

        return res.status(201).json({ message: 'Registration successful!', userId: result.insertId });

    } catch (error) {
        console.error('❌ Database Error:', error);
        return res.status(500).json({ message: 'Database error!', error: error.message });
    }
}





