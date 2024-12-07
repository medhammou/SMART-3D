import React from 'react';
import { FileText, Download, Calendar, Filter } from 'lucide-react';

export const Reports: React.FC = () => {
  const reports = [
    {
      id: 1,
      title: "Rapport d'intervention - Site Commercial Nord",
      type: "Intervention",
      date: "2024-03-20",
      author: "Jean Dupont",
      status: "Complété"
    },
    {
      id: 2,
      title: "Analyse mensuelle - Février 2024",
      type: "Analyse",
      date: "2024-03-01",
      author: "Marie Martin",
      status: "En revue"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Rapports
        </h1>
        <div className="flex space-x-3">
          <button className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <Calendar className="w-5 h-5 mr-2" />
            Période
          </button>
          <button className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <Filter className="w-5 h-5 mr-2" />
            Filtrer
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {reports.map((report) => (
            <div key={report.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-start space-x-3">
                  <FileText className="w-6 h-6 text-blue-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      {report.title}
                    </h3>
                    <div className="mt-1 flex items-center space-x-4">
                      <span className="text-sm text-gray-500">
                        {report.date}
                      </span>
                      <span className="text-sm text-gray-500">
                        Par: {report.author}
                      </span>
                      <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                        {report.status}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="flex items-center px-4 py-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg">
                  <Download className="w-5 h-5 mr-2" />
                  Télécharger
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};