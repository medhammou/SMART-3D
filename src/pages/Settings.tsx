import React from 'react';
import { User, Bell, Lock, Globe, Palette, HelpCircle } from 'lucide-react';

export const Settings: React.FC = () => {
  const settingsSections = [
    {
      icon: User,
      title: "Profil",
      description: "Gérez vos informations personnelles"
    },
    {
      icon: Bell,
      title: "Notifications",
      description: "Configurez vos préférences de notification"
    },
    {
      icon: Lock,
      title: "Sécurité",
      description: "Gérez la sécurité de votre compte"
    },
    {
      icon: Globe,
      title: "Langue",
      description: "Choisissez votre langue préférée"
    },
    {
      icon: Palette,
      title: "Apparence",
      description: "Personnalisez l'interface utilisateur"
    },
    {
      icon: HelpCircle,
      title: "Aide",
      description: "Centre d'aide et support"
    }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
        Paramètres
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {settingsSections.map((section, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <button className="w-full p-6 text-left">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                  <section.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {section.title}
                  </h3>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                    {section.description}
                  </p>
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};