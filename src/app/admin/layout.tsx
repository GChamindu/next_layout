import { NavigationMenu } from '@/components/ui/navigation-menu'
export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <NavigationMenu>Admin Nav: Dashboard | Settings</NavigationMenu>
            <main>{children}</main>
        </div>
    );
}