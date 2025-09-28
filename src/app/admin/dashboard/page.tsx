import { CardStats } from '@/components/dashboard/card-stats';
import { RecentTable, recentColumns } from '@/components/dashboard/recent-table';
import { AnalyticsChart } from '@/components/dashboard/analytics-chart';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, FileText, Settings, LogOut } from 'lucide-react'; // Assuming lucide-react icons added via shadcn
// import { logoutServer } from '@/lib/auth-server'; // Assuming your auth function

// Dummy data (replace with fetch from Laravel, e.g., await fetch('/api/admin/stats'))
const stats = [
  { title: 'Total Posts', value: 12, change: 16, trend: 'up' },
  { title: 'Active Users', value: 239, change: 12, trend: 'up' },
  { title: 'New Posts', value: 5, change: -3, trend: 'down' },
  { title: 'Avg Views', value: '1.4k', change: 2, trend: 'up' },
];

const chartData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 500 },
  { name: 'Apr', value: 280 },
];

const chartConfig = { analytics: { label: 'Views', color: 'hsl(var(--chart-1))' } };

const recentPosts: any[] = [
  { id: '1', item: 'Post Title 1', status: 'success', amount: 100, date: '2025-09-20' },
  { id: '2', item: 'Post Title 2', status: 'pending', amount: 200, date: '2025-09-25' },
];

export default async function AdminDashboard() {
  // Real fetch example (uncomment):
  // const token = getToken();
  // const [statsRes, chartRes, postsRes] = await Promise.all([
  //   fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/stats`, { headers: { Authorization: `Bearer ${token}` } }),
  //   fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/analytics`, { ... }),
  //   fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/posts`, { ... }),
  // ]);
  // const stats = await statsRes.json();
  // ... etc.

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="hidden md:block w-64 border-r bg-background p-4 space-y-4">
        <nav className="space-y-2">
          <Link href="/admin/dashboard" className="flex items-center space-x-2 text-sm font-medium hover:text-primary">
            <LayoutDashboard className="h-4 w-4" />
            Dashboard
          </Link>
          <Link href="/admin/posts" className="flex items-center space-x-2 text-sm font-medium hover:text-primary">
            <FileText className="h-4 w-4" />
            Posts
          </Link>
          <Link href="/admin/settings" className="flex items-center space-x-2 text-sm font-medium hover:text-primary">
            <Settings className="h-4 w-4" />
            Settings
          </Link>
          <form
            action={async () => {
              'use server';
              await logoutServer();
            }}
            className="flex items-center space-x-2 text-sm font-medium hover:text-primary"
          >
            <Button variant="ghost" size="sm" type="submit" className="p-0">
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </form>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4">
        <div className="space-y-6">
          {/* Overview Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <CardStats key={i} {...stat} />
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Analytics Chart */}
            <AnalyticsChart data={chartData} config={chartConfig} title="Post Views Over Time" />

            {/* Recent Posts Table */}
            <RecentTable data={recentPosts} columns={recentColumns} title="Recent Posts" />
          </div>
        </div>
      </main>
    </div>
  );
}