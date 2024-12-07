import React from 'react';
import { DashboardMetrics } from '../components/dashboard/DashboardMetrics';
import { IdentificationPanel } from '../components/identification/IdentificationPanel';

export const Dashboard: React.FC = () => {
  return (
    <>
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
        Tableau de bord
      </h1>
      <DashboardMetrics />
      <div className="mt-8">
        <IdentificationPanel />
      </div>
    </>
  );
};