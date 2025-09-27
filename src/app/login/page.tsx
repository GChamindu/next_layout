'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '@/lib/auth';
import { Button } from '@/components/ui/button';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    // const handleLogin = async () => {
    //     try {
    //         await login(email, password);
    //         router.push('/');
    //     } catch (err: any) {
    //         setError(err.message);
    //     }
    // };

    return (
        <div>
            <h1>Login</h1>
            {/* <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <Button onClick={handleLogin}>Login</Button>
            {error && <p>{error}</p>} */}
        </div>
    );
}