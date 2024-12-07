import React from 'react';
import { Bell, CheckCircle, AlertTriangle, Clock, Calendar } from 'lucide-react';

export const Notifications: React.FC = () => {
  const notifications = [
    {
      id: 1,
      type: "urgent",
      title: "Nouvelle intervention urgente",
      message: "Intervention requise au Site Commercial Nord",
      time: "Il y a 5 minutes",
      read: false
    },
    {
      id: 2,
      type: "info",
      title: "Rapport complété",
      message: "Le rapport d'intervention #1234 a été finalisé",
      time: "Il y a 2 heures",
      read: true
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Notifications
        </h1>
        <div className="flex space-x-3">
          <button className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <Clock className="w-5 h-5 mr-2" />
            Récentes
          </button>
          <button className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <Calendar className="w-5 h-5 mr-2" />
            Cette semaine
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow divide-y divide-gray-200 dark:divide-gray-700">
        {notifications.map((notification) => (
          <div 
            key={notification.id} 
            className={`p-6 ${
              notification.read 
                ? 'bg-white dark:bg-gray-800' 
                : 'bg-blue-50 dark:bg-blue-900/10'
            }`}
          >
            <div className="flex items-start space-x-3">
              {notification.type === 'urgent' ? (
                <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0" />
              ) : (
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
              )}
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {notification.title}
                  </h3>
                  <span className="text-sm text-gray-500">
                    {notification.time}
                  </span>
                </div>
                <p className="mt-1 text-gray-600 dark:text-gray-300">
                  {notification.message}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};