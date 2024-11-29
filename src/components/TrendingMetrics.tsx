import React from 'react';
import { TrendingUp, Zap, Activity } from 'lucide-react';

interface MetricCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  change?: string;
  isPositive?: boolean;
}

function MetricCard({ icon, title, value, change, isPositive }: MetricCardProps) {
  return (
    <div className="bg-background rounded-lg p-4">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <span className="text-sm text-text-secondary">{title}</span>
      </div>
      <div className="text-lg font-medium text-text-primary">
        {value}
      </div>
      {change && (
        <div className={`text-sm ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
          {change}
        </div>
      )}
    </div>
  );
}

export default function TrendingMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <MetricCard
        icon={<TrendingUp className="w-4 h-4 text-primary" />}
        title="Trending Volume"
        value="$24.8B"
        change="+5.2%"
        isPositive={true}
      />
      <MetricCard
        icon={<Zap className="w-4 h-4 text-primary" />}
        title="Most Visited"
        value="2.1M visits"
      />
      <MetricCard
        icon={<Activity className="w-4 h-4 text-primary" />}
        title="Active Pairs"
        value="1,248"
        change="+12"
        isPositive={true}
      />
    </div>
  );
}