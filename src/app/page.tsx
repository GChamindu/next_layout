import { redirect } from 'next/navigation';
import { getUser } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default async function Home() {
  const user = await getUser(); // Uncomment to enable

  if (user) {
    if (user.roles.includes('admin')) redirect('/admin/dashboard');
    if (user.roles.includes('user')) redirect('/user/dashboard');
    if (user.roles.includes('maintainer')) redirect('/maintainer/dashboard');
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Home Page</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Welcome! Log in or register to access your dashboard.</p>
          <div className="flex justify-between">
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/register">Register</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}