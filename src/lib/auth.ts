import Cookies from 'js-cookie';
import { cookies } from 'next/headers';

// Helper to get token from cookies (works on client/server)
function getToken() {
    if (typeof window === 'undefined') {
        // Server-side: Use next/headers
        return cookies().get('auth_token')?.value || null;
    } else {
        // Client-side: Use js-cookie
        return Cookies.get('auth_token') || null;
    }
}

// Fetch CSRF token for Sanctum
async function getCsrfToken() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sanctum/csrf-cookie`, {
        method: 'GET',
        credentials: 'include', // Include cookies for session
        cache: 'no-store',
    });
    if (!response.ok) throw new Error('Failed to fetch CSRF token');
    return response;
}

export async function login(email: string, password: string) {
    // Fetch CSRF token first
    await getCsrfToken();

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include', // Send cookies with request
        cache: 'no-store',
    });

    if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || 'Login failed');
    }

    const data = await res.json();
    // Laravel sets auth_token in HTTP-only cookie via Set-Cookie header
    return data.user;
}

export async function register(name: string, email: string, password: string) {
    // Fetch CSRF token first
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
    // Laravel sets auth_token in HTTP-only cookie
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
        const errorData = await res.json().catch(() => ({}));
        return { error: errorData.message || 'Failed to fetch user' };
    }

    return res.json();
}

export function logout() {
    Cookies.remove('auth_token');
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/logout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        cache: 'no-store',
    });
}