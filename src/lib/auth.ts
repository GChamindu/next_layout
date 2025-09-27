import Cookies from 'js-cookie';
import { cookies } from 'next/headers';

// Helper to get token from cookies (works on client/server)
function getToken() {
    if (typeof window === 'undefined') {
        return cookies().get('auth_token')?.value || null;
    } else {
        return Cookies.get('auth_token') || null;
    }
}

// Fetch CSRF token for Sanctum
async function getCsrfToken() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sanctum/csrf-cookie`, {
        method: 'GET',
        credentials: 'include',
        cache: 'no-store',
    });
    if (!response.ok) throw new Error('Failed to fetch CSRF token');
    return response;
}

export async function login(email: string, password: string) {
    await getCsrfToken();

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
        cache: 'no-store',
    });

    if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || 'Login failed');
    }

    const data = await res.json();
    return data.user;
}

export async function register(name: string, email: string, password: string) {
    await getCsrfToken();

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
        credentials: 'include',
        cache: 'no-store',
    });

    if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || 'Register failed');
    }

    const data = await res.json();
    return data.user;
}

export async function getUser() {
    const token = getToken();
    if (!token) return null;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
        headers: { 
            Authorization: `Bearer ${token}`,
            'Accept': 'application/json',
        },
        cache: 'no-store',
    });

    if (!res.ok) {
        return null;
    }

    return res.json();
}

export async function logout() {
    const token = getToken();
    if (!token) return;

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/logout`, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        credentials: 'include',
        cache: 'no-store',
    });
    Cookies.remove('auth_token');
}