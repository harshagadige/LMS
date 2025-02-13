import { useState } from 'react';
import { useRouter } from 'next/router'; 
import styles from "../styles/Login.module.css";

function Logincode() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const router = useRouter(); 

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple client-side validation
        if (!email || !password) {
            setError('Both fields are required.');
            return;
        }

        // Reset error and proceed with authentication
        setError('');
        alert('Login successful! Redirecting to home...');

        // ✅ Redirect to Home Page after 2 seconds
        setTimeout(() => {
            router.push('/');
        }, 2000);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Login</h1>
            {error && <div className={styles.error}>{error}</div>}
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                    <label htmlFor="email" className={styles.labelOne}>Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.input} 
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="password" className={styles.labelTwo}>Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.input} 
                    />
                </div>
                <button type="submit" className={styles.button}>Login</button>
            </form>
        </div>
    );
}

export default Logincode;
