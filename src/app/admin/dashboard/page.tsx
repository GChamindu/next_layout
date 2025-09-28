"use client";

import { CardStats } from "@/components/dashboard/card-stats";
import { RecentTable, recentColumns } from "@/components/dashboard/recent-table";
import { AnalyticsChart } from "@/components/dashboard/analytics-chart";
import type { ChartConfig } from "@/components/ui/chart";

// ----------------------
// Dummy Stats Data
// ----------------------
const stats = [
  { title: "Total Posts", value: 12, change: 16, trend: "up" },
  { title: "Active Users", value: 239, change: 12, trend: "up" },
  { title: "New Posts", value: 5, change: -3, trend: "down" },
  { title: "Avg Views", value: "1.4k", change: 2, trend: "up" },
];

// ----------------------
// Dummy Chart Data
// ----------------------
const chartData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 500 },
  { name: "Apr", value: 280 },
];

const chartConfig: ChartConfig = {
  analytics: { label: "Views", color: "hsl(var(--chart-1))" },
};

// ----------------------
// Dummy Table Data
// ----------------------
interface RecentItem {
  id: string;
  item: string;
  status: "success" | "pending" | "error";
  amount?: number;
  date: string;
}

const recentPosts: RecentItem[] = [
  {
    id: "1",
    item: "Post Title 1",
    status: "success",
    amount: 100,
    date: "2025-09-20",
  },
  {
    id: "2",
    item: "Post Title 2",
    status: "pending",
    amount: 200,
    date: "2025-09-25",
  },
  {
    id: "3",
    item: "Post Title 3",
    status: "error",
    amount: 150,
    date: "2025-09-27",
  },
];

// ----------------------
// Page Component
// ----------------------
export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <CardStats key={i} {...stat} />
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Analytics Chart */}
        <AnalyticsChart
          data={chartData}
          config={chartConfig}
          title="Post Views Over Time"
        />

        {/* Recent Posts Table */}
        <RecentTable
          data={recentPosts}
          columns={recentColumns}
          title="Recent Posts"
        />
      </div>
    </div>
  );
}
