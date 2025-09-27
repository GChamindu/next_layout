import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t bg-background p-4 text-center">
      <p>&copy; 2025 Your App. All rights reserved.</p>
      <div className="mt-2 space-x-4">
        <Button variant="link" asChild>
          <Link href="/privacy">Privacy Policy</Link>
        </Button>
        <Button variant="link" asChild>
          <Link href="/terms">Terms of Service</Link>
        </Button>
      </div>
    </footer>
  );
}