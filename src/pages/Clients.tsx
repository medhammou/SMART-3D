import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { ClientList } from '../components/clients/ClientList';
import { ClientSearch } from '../components/clients/ClientSearch';
import { ClientForm } from '../components/clients/ClientForm';
import type { Client } from '../types/client';

export const Clients: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  // Mock data
  const clients: Client[] = [
    {
      id: 1,
      name: "Entreprise ABC",
      contact: "Marie Martin",
      email: "contact@abc.com",
      phone: "+33 1 23 45 67 89",
      address: "123 Rue de Paris",
      status: "active",
      lastIntervention: "2024-03-15",
      createdAt: "2024-01-01",
      updatedAt: "2024-03-15",
      interventions: [
        {
          id: 1,
          date: "2024-03-15",
          type: "Maintenance",
          status: "Completed"
        }
      ]
    },
    {
      id: 2,
      name: "Société XYZ",
      contact: "Jean Dupont",
      email: "contact@xyz.com",
      phone: "+33 1 98 76 54 32",
      address: "456 Avenue des Champs",
      status: "inactive",
      lastIntervention: "2024-02-28",
      createdAt: "2024-01-15",
      updatedAt: "2024-02-28"
    }
  ];

  const handleSearch = (query: string) => {
    console.log('Searching:', query);
    // Implement search logic
  };

  const handleFilter = () => {
    console.log('Opening filter modal');
    // Implement filter logic
  };

  const handleViewClient = (id: number) => {
    console.log('Viewing client:', id);
    // Implement view logic
  };

  const handleEditClient = (id: number) => {
    const client = clients.find(c => c.id === id);
    if (client) {
      setSelectedClient(client);
      setShowForm(true);
    }
  };

  const handleDeleteClient = (id: number) => {
    console.log('Deleting client:', id);
    // Implement delete logic with confirmation
  };

  const handleSubmitClient = (data: Partial<Client>) => {
    console.log('Submitting client:', data);
    setShowForm(false);
    setSelectedClient(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Gestion des clients
        </h1>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-5 h-5 mr-2" />
          Nouveau client
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <ClientSearch onSearch={handleSearch} onFilter={handleFilter} />
        <ClientList
          clients={clients}
          onViewClient={handleViewClient}
          onEditClient={handleEditClient}
          onDeleteClient={handleDeleteClient}
        />
      </div>

      {showForm && (
        <ClientForm
          client={selectedClient || undefined}
          onSubmit={handleSubmitClient}
          onClose={() => {
            setShowForm(false);
            setSelectedClient(null);
          }}
        />
      )}
    </div>
  );
};