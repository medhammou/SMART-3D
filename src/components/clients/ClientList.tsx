import React from 'react';
import { Edit, Trash2, Eye } from 'lucide-react';
import type { Client } from '../../types/client';

interface Props {
  clients: Client[];
  onViewClient: (id: number) => void;
  onEditClient: (id: number) => void;
  onDeleteClient: (id: number) => void;
}

export const ClientList: React.FC<Props> = ({
  clients,
  onViewClient,
  onEditClient,
  onDeleteClient,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50 dark:bg-gray-700">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Client
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Contact
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Statut
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Dernière intervention
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {clients.map((client) => (
            <tr key={client.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
              <td className="px-6 py-4">
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  {client.name}
                </div>
                <div className="text-sm text-gray-500">{client.address}</div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900 dark:text-white">
                  {client.contact}
                </div>
                <div className="text-sm text-gray-500">{client.email}</div>
                <div className="text-sm text-gray-500">{client.phone}</div>
              </td>
              <td className="px-6 py-4">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  client.status === 'active'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                    : 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
                }`}>
                  {client.status === 'active' ? 'Actif' : 'Inactif'}
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {client.lastIntervention}
              </td>
              <td className="px-6 py-4 text-right space-x-3">
                <button
                  onClick={() => onViewClient(client.id)}
                  className="text-blue-600 hover:text-blue-900 dark:hover:text-blue-400"
                >
                  <Eye className="w-5 h-5" />
                </button>
                <button
                  onClick={() => onEditClient(client.id)}
                  className="text-amber-600 hover:text-amber-900 dark:hover:text-amber-400"
                >
                  <Edit className="w-5 h-5" />
                </button>
                <button
                  onClick={() => onDeleteClient(client.id)}
                  className="text-red-600 hover:text-red-900 dark:hover:text-red-400"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};