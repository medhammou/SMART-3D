import React from 'react';
import { Calendar, Users, MapPin, Clock } from 'lucide-react';

export const Interventions: React.FC = () => {
  const interventions = [
    {
      id: 1,
      client: "Entreprise ABC",
      address: "123 Rue de Paris",
      date: "2024-03-20",
      time: "09:00",
      type: "Traitement préventif",
      status: "planned",
      technician: "Jean Dupont"
    },
    // Add more mock data as needed
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
        Gestion des interventions
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <div className="flex items-center space-x-3">
            <Calendar className="w-5 h-5 text-blue-500" />
            <span className="text-gray-700 dark:text-gray-300">Aujourd'hui</span>
          </div>
          <p className="text-2xl font-bold mt-2 text-gray-900 dark:text-white">8</p>
          <p className="text-sm text-gray-500">interventions planifiées</p>
        </div>
        {/* Add more summary cards */}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            Interventions à venir
          </h2>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {interventions.map((intervention) => (
            <div key={intervention.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {intervention.client}
                  </h3>
                  <div className="mt-1 space-y-1">
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-1" />
                      {intervention.address}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {intervention.date} à {intervention.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-1" />
                      {intervention.technician}
                    </div>
                  </div>
                </div>
                <div>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {intervention.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};