"use client";

import { RecentTable, recentColumns } from '@/components/dashboard/recent-table';

const recentPosts = [
  { id: '1', item: 'Post Title 1', status: 'success', amount: 100, date: '2025-09-20' },
  { id: '2', item: 'Post Title 2', status: 'pending', amount: 200, date: '2025-09-25' },
];

export default function AdminPosts() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Posts</h1>
      {/* <RecentTable data={recentPosts} columns={recentColumns} title="Recent Posts" /> */}
    </div>
  );
}