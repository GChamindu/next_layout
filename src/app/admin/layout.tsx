import Link from 'next/link';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
import { logout } from '@/lib/auth';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/"><NavigationMenuLink>Dashboard</NavigationMenuLink></Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/admin/posts"><NavigationMenuLink>Posts</NavigationMenuLink></Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/admin/settings"><NavigationMenuLink>Settings</NavigationMenuLink></Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        {/* <NavigationMenuLink onClick={async () => { await logout(); window.location.href = '/'; }}>Logout</NavigationMenuLink> */}
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <main>{children}</main>
        </div>
    );
}