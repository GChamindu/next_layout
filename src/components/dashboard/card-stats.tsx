import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight, TrendingUp } from 'lucide-react'; 

interface CardStatsProps {
  title: string;
  value: string | number;
  change?: number;
  trend?: 'up' | 'down';
}

export function CardStats({ title, value, change, trend = 'up' }: CardStatsProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <TrendingUp className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change !== undefined && (
          <p className="text-xs text-muted-foreground">
            {trend === 'up' ? '+' : ''}{change}% from last month{' '}
            <ArrowUpRight className={`h-3 w-3 ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`} />
          </p>
        )}
      </CardContent>
    </Card>
  );
}