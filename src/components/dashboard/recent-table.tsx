"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { DataTable } from "./DataTable";

interface RecentItem {
  id: string;
  item: string;
  status: "success" | "pending" | "error";
  amount?: number;
  date: string;
}

interface RecentTableProps {
  data: RecentItem[];
  columns: ColumnDef<RecentItem, unknown>[];
  title: string;
}

export function RecentTable({ data, columns, title }: RecentTableProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      <DataTable columns={columns} data={data} />
    </div>
  );
}

// 👇 define the actual columns here
export const recentColumns: ColumnDef<RecentItem>[] = [
  { accessorKey: "item", header: "Item" },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge
        variant={
          row.original.status === "success"
            ? "default"
            : row.original.status === "pending"
            ? "secondary"
            : "destructive"
        }
      >
        {row.original.status}
      </Badge>
    ),
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => `$${row.original.amount ?? 0}`,
  },
  { accessorKey: "date", header: "Date" },
];
