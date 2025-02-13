import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/register.module.css';

function Register() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!fullName || !email || !password || !confirmPassword) {
            setError('All fields are required.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        setError('');

        try {
            const res = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ fullName, email, password })
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || 'Registration failed');
            }

            setSuccess(true);
            alert('Registration successful! Redirecting to login...');

            router.push('/Logincode');

        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Register</h1>
            {error && <div className={styles.error}>{error}</div>}
            {success && <div className={styles.success}>Registration successful!</div>}

            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                    <label htmlFor="fullName" className={styles.labelName}>Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className={styles.input} // ✅ Applied styles
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="email" className={styles.labelMail}>Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.input} // ✅ Applied styles
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="password" className={styles.labelPsw}>Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.input} // ✅ Applied styles
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="confirmPassword" className={styles.labelCPsw}>Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className={styles.input} // ✅ Applied styles
                    />
                </div>

                <button type="submit" className={styles.button}>Register</button>
            </form>
        </div>
    );
}

export default Register;
