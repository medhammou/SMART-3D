import React from 'react';
import { Users, Calendar, AlertTriangle, CheckCircle } from 'lucide-react';

const metrics = [
  {
    title: 'Interventions du jour',
    value: '12',
    icon: Calendar,
    color: 'blue',
  },
  {
    title: 'Clients actifs',
    value: '284',
    icon: Users,
    color: 'green',
  },
  {
    title: 'Interventions urgentes',
    value: '3',
    icon: AlertTriangle,
    color: 'red',
  },
  {
    title: 'Taux de résolution',
    value: '98%',
    icon: CheckCircle,
    color: 'indigo',
  },
];

export const DashboardMetrics: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{metric.title}</p>
              <p className="text-2xl font-semibold mt-2 text-gray-800 dark:text-white">
                {metric.value}
              </p>
            </div>
            <div className={`bg-${metric.color}-100 dark:bg-${metric.color}-900/20 p-3 rounded-full`}>
              <metric.icon className={`w-6 h-6 text-${metric.color}-600 dark:text-${metric.color}-400`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};