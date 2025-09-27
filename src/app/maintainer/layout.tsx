import Link from 'next/link';

export default function MaintainerLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <nav>
                <Link href="/maintainer/dashboard">Dashboard</Link> | 
                <Link href="/maintainer/reports">Reports</Link>
            </nav>
            <main>{children}</main>
        </div>
    );
}