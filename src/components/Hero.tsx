import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <Card className="text-center">
      <CardHeader>
        <CardTitle>Welcome to Your App</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">Log in or register to get started.</p>
        <Button asChild>
          <Link href="/login">Get Started</Link>
        </Button>
      </CardContent>
    </Card>
  );
}