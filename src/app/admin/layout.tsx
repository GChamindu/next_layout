import Link from 'next/link';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
import { logout } from '@/lib/auth';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
          
            <main className='p-10'>{children}</main>
        </div>
    );
}