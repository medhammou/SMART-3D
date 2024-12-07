import React from 'react';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';

interface Props {
  onSearch: (query: string) => void;
  onFilter: () => void;
}

export const ClientSearch: React.FC<Props> = ({ onSearch, onFilter }) => {
  return (
    <div className="p-4 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher par nom, email, téléphone..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center space-x-2">
          <button 
            onClick={onFilter}
            className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <Filter className="w-5 h-5 mr-2" />
            Filtres
          </button>
          <button className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
            <SlidersHorizontal className="w-5 h-5 mr-2" />
            Trier
          </button>
        </div>
      </div>
    </div>
  );
};