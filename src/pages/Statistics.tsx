import React from 'react';
import { BarChart3, TrendingUp, Calendar, ArrowUp, ArrowDown } from 'lucide-react';

export const Statistics: React.FC = () => {
  const metrics = [
    {
      title: "Interventions totales",
      value: "1,284",
      change: "+12.5%",
      trend: "up"
    },
    {
      title: "Taux de résolution",
      value: "94.2%",
      change: "+2.4%",
      trend: "up"
    },
    {
      title: "Temps moyen d'intervention",
      value: "48min",
      change: "-5.1%",
      trend: "down"
    },
    {
      title: "Satisfaction client",
      value: "4.8/5",
      change: "+0.3%",
      trend: "up"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Statistiques
        </h1>
        <button className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <Calendar className="w-5 h-5 mr-2" />
          Derniers 30 jours
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {metric.title}
            </h3>
            <div className="mt-2 flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                {metric.value}
              </p>
              <span className={`ml-2 flex items-center text-sm ${
                metric.trend === 'up' 
                  ? 'text-green-600 dark:text-green-400' 
                  : 'text-red-600 dark:text-red-400'
              }`}>
                {metric.trend === 'up' ? (
                  <ArrowUp className="w-4 h-4 mr-1" />
                ) : (
                  <ArrowDown className="w-4 h-4 mr-1" />
                )}
                {metric.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Interventions par type
            </h3>
            <BarChart3 className="w-5 h-5 text-gray-400" />
          </div>
          <div className="h-80 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400">Graphique des interventions</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Évolution mensuelle
            </h3>
            <TrendingUp className="w-5 h-5 text-gray-400" />
          </div>
          <div className="h-80 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400">Graphique d'évolution</p>
          </div>
        </div>
      </div>
    </div>
  );
};