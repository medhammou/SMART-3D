import React from 'react';
import { ImageUploader } from './ImageUploader';
import { AnalysisResult } from './AnalysisResult';
import { HistoricalAnalysis } from './HistoricalAnalysis';
import { ProtocolGenerator } from '../interventions/ProtocolGenerator';
import { useAnalysisStore } from '../../store/analysisStore';
import { usePestIdentification } from '../../hooks/usePestIdentification';
import { AlertCircle } from 'lucide-react';

export const IdentificationPanel: React.FC = () => {
  const { addAnalysis, currentAnalysis, setCurrentAnalysis } = useAnalysisStore();
  const { analyzeImage, isAnalyzing, error } = usePestIdentification();

  const handleImageUpload = async (file: File) => {
    const result = await analyzeImage(file);
    
    if (result) {
      const analysisResult = {
        id: Date.now().toString(),
        imageUrl: URL.createObjectURL(file),
        timestamp: new Date().toISOString(),
        analysis: {
          ...result,
          recommendations: [
            'Inspection immédiate des zones de stockage',
            'Installation de pièges aux points d\'entrée',
            'Sécurisation des sources de nourriture',
            'Traitement préventif des zones adjacentes'
          ]
        },
        detectedLocations: [
          { x: 100, y: 100, width: 50, height: 50, label: 'Nid potentiel' }
        ]
      };

      addAnalysis(analysisResult);
      setCurrentAnalysis(analysisResult);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Identification des nuisibles
            </h2>
            <ImageUploader onImageUpload={handleImageUpload} />
            
            {error && (
              <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <div className="flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                  <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
                </div>
              </div>
            )}
          </div>

          {isAnalyzing && (
            <div className="text-center p-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500 mx-auto"></div>
              <p className="mt-2 text-gray-600 dark:text-gray-400">Analyse en cours...</p>
            </div>
          )}

          {currentAnalysis && !isAnalyzing && (
            <>
              <AnalysisResult result={currentAnalysis} />
              <ProtocolGenerator />
            </>
          )}
        </div>

        <div>
          <HistoricalAnalysis />
        </div>
      </div>
    </div>
  );
};