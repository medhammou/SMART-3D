import React, { useEffect } from 'react';
import { ClipboardList, Clock, Shield, AlertTriangle } from 'lucide-react';
import { useAnalysisStore } from '../../store/analysisStore';
import { useInterventionStore } from '../../store/interventionStore';
import type { Protocol } from '../../types/intervention';

export const ProtocolGenerator: React.FC = () => {
  const { currentAnalysis } = useAnalysisStore();
  const { getProtocolByPestType, addProtocol } = useInterventionStore();

  useEffect(() => {
    if (currentAnalysis && !getProtocolByPestType(currentAnalysis.analysis.pestType)) {
      // Generate protocol based on analysis
      const protocol: Protocol = {
        id: `protocol-${Date.now()}`,
        pestType: currentAnalysis.analysis.pestType,
        treatmentMethods: generateTreatmentMethods(currentAnalysis.analysis.riskLevel),
        products: generateRecommendedProducts(currentAnalysis.analysis.pestType),
        frequency: determineFrequency(currentAnalysis.analysis.riskLevel),
        duration: calculateDuration(currentAnalysis.analysis.riskLevel),
        controlPoints: generateControlPoints(),
        preventiveMeasures: currentAnalysis.analysis.recommendations,
        safetyInstructions: generateSafetyInstructions(),
      };
      addProtocol(protocol);
    }
  }, [currentAnalysis]);

  const protocol = currentAnalysis 
    ? getProtocolByPestType(currentAnalysis.analysis.pestType)
    : null;

  if (!protocol || !currentAnalysis) {
    return null;
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
        <ClipboardList className="w-5 h-5 mr-2" />
        Protocole d'intervention
      </h3>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Durée estimée
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {protocol.duration} minutes
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Fréquence
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {protocol.frequency}
              </p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Méthodes de traitement
          </h4>
          <ul className="space-y-2">
            {protocol.treatmentMethods.map((method, index) => (
              <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                {method}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Produits recommandés
          </h4>
          <div className="grid grid-cols-1 gap-3">
            {protocol.products.map((product) => (
              <div 
                key={product.id}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-3"
              >
                <p className="font-medium text-gray-800 dark:text-gray-200">
                  {product.name}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Dosage: {product.dosage} {product.unit}
                </p>
                {product.restrictions.length > 0 && (
                  <div className="mt-2 flex items-start space-x-1">
                    <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-amber-600 dark:text-amber-400">
                      {product.restrictions.join(', ')}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Points de contrôle
          </h4>
          <div className="space-y-3">
            {protocol.controlPoints.map((point) => (
              <div key={point.id} className="flex items-start">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2"></div>
                <div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {point.label}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Utility functions for protocol generation
function generateTreatmentMethods(riskLevel: string): string[] {
  const methods = [
    'Inspection approfondie des zones à risque',
    'Installation de pièges mécaniques',
    'Application de produits répulsifs',
  ];
  
  if (riskLevel === 'high') {
    methods.push(
      'Traitement chimique ciblé',
      'Mise en place de barrières physiques'
    );
  }
  
  return methods;
}

function generateRecommendedProducts(pestType: string): Product[] {
  return [
    {
      id: 'prod-1',
      name: 'EcoPiège Pro',
      dosage: '50',
      unit: 'ml/m²',
      safetyPeriod: 24,
      restrictions: ['Tenir hors de portée des enfants et des animaux']
    },
    {
      id: 'prod-2',
      name: 'BioRepel Plus',
      dosage: '25',
      unit: 'g/m²',
      safetyPeriod: 12,
      restrictions: ['Usage extérieur uniquement']
    }
  ];
}

function determineFrequency(riskLevel: string): string {
  switch (riskLevel) {
    case 'high':
      return 'Hebdomadaire pendant 1 mois, puis bi-mensuel';
    case 'medium':
      return 'Bi-mensuel';
    default:
      return 'Mensuel';
  }
}

function calculateDuration(riskLevel: string): number {
  switch (riskLevel) {
    case 'high':
      return 120;
    case 'medium':
      return 90;
    default:
      return 60;
  }
}

function generateControlPoints(): ControlPoint[] {
  return [
    {
      id: 'cp-1',
      label: 'Points d\'entrée',
      description: 'Vérifier l\'étanchéité des accès',
      frequency: 'À chaque visite',
      isRequired: true
    },
    {
      id: 'cp-2',
      label: 'Zones de stockage',
      description: 'Contrôler les zones de stockage alimentaire',
      frequency: 'À chaque visite',
      isRequired: true
    },
    {
      id: 'cp-3',
      label: 'Dispositifs de piégeage',
      description: 'Vérifier l\'état et l\'efficacité des pièges',
      frequency: 'Hebdomadaire',
      isRequired: true
    }
  ];
}

function generateSafetyInstructions(): string[] {
  return [
    'Porter les EPI appropriés pendant l\'intervention',
    'Respecter les délais de sécurité après traitement',
    'Maintenir une ventilation adéquate',
    'Sécuriser la zone d\'intervention'
  ];
}