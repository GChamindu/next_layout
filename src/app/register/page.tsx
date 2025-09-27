'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { register } from '@/lib/auth';
import { Button } from '@/components/ui/button';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    // const handleRegister = async () => {
    //     try {
    //         await register(name, email, password);
    //         router.push('/');
    //     } catch (err: any) {
    //         setError(err.message);
    //     }
    // };

    return (
        <div>
            <h1>Register</h1>
            {/* <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <Button onClick={handleRegister}>Register</Button>
            {error && <p>{error}</p>} */}
        </div>
    );
}