export default function UserLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <nav>User Nav: Profile | Home</nav>
            <main>{children}</main>
        </div>
    );
}