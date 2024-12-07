import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  Settings,
  Map,
  FileText,
  BarChart3,
  Bell
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: Calendar, label: 'Interventions', path: '/interventions' },
  { icon: Users, label: 'Clients', path: '/clients' },
  { icon: Map, label: 'Cartographie', path: '/maps' },
  { icon: FileText, label: 'Rapports', path: '/reports' },
  { icon: BarChart3, label: 'Statistiques', path: '/statistics' },
  { icon: Bell, label: 'Notifications', path: '/notifications' },
  { icon: Settings, label: 'Paramètres', path: '/settings' },
];

export const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 fixed left-0 top-0">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Smart3D</h1>
      </div>
      <nav className="mt-8">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `
              w-full flex items-center px-6 py-3 text-gray-700 dark:text-gray-300 
              hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors
              ${isActive ? 'bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400' : ''}
            `}
          >
            <item.icon className="w-5 h-5 mr-3" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};