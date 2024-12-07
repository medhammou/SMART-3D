import React from 'react';
import { MapPin, Search, Layers, Filter } from 'lucide-react';

export const Maps: React.FC = () => {
  const sites = [
    {
      id: 1,
      name: "Site Commercial Nord",
      address: "45 Avenue du Commerce",
      type: "Commercial",
      lastVisit: "2024-03-15",
      status: "Actif",
      coordinates: { lat: 48.8566, lng: 2.3522 }
    },
    {
      id: 2,
      name: "Entrepôt Est",
      address: "12 Rue de l'Industrie",
      type: "Industriel",
      lastVisit: "2024-03-18",
      status: "En surveillance",
      coordinates: { lat: 48.8566, lng: 2.3522 }
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Cartographie des sites
        </h1>
        <div className="flex space-x-3">
          <button className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <Layers className="w-5 h-5 mr-2" />
            Couches
          </button>
          <button className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <Filter className="w-5 h-5 mr-2" />
            Filtres
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow h-[600px] p-4">
          <div className="h-full bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400">Carte interactive</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un site..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700"
              />
            </div>
          </div>
          
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {sites.map((site) => (
              <div key={site.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                      {site.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{site.address}</p>
                    <div className="flex items-center mt-2 space-x-2">
                      <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400">
                        {site.type}
                      </span>
                      <span className="text-xs text-gray-500">
                        Dernière visite: {site.lastVisit}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};