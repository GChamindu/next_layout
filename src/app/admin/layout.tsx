import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/admin/dashboard"><NavigationMenuLink>Dashboard</NavigationMenuLink></Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/admin/settings"><NavigationMenuLink>Settings</NavigationMenuLink></Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/admin/posts"><NavigationMenuLink>Posts</NavigationMenuLink></Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <main>{children}</main>
        </div>
    );
}