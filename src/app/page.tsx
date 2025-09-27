import { redirect } from 'next/navigation';
import { getUser } from '@/lib/auth';
import Link from 'next/link';

export default async function Home() {
    // const user = await getUser();

    // if (user) {
    //     if (user.roles.includes('admin')) redirect('/admin/dashboard');
    //     if (user.roles.includes('user')) redirect('/user/dashboard');
    //     if (user.roles.includes('maintainer')) redirect('/maintainer/dashboard');
    // }

    return (
        <div>
            <h1>Home Page</h1>
            <p>Welcome! Log in or register to access your dashboard.</p>
            <Link href="/login">Login</Link> | <Link href="/register">Register</Link>
        </div>
    );
}