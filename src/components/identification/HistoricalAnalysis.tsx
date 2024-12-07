import React from 'react';
import { Clock, Filter } from 'lucide-react';
import { useAnalysisStore } from '../../store/analysisStore';
import { formatDate } from '../../utils/dateUtils';

export const HistoricalAnalysis: React.FC = () => {
  const { analyses } = useAnalysisStore();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Historique des analyses
          </h2>
          <button className="flex items-center px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
            <Filter className="w-4 h-4 mr-2" />
            Filtrer
          </button>
        </div>
      </div>
      
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {analyses.map((analysis) => (
          <div key={analysis.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {analysis.analysis.pestType}
                  </h3>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${analysis.analysis.riskLevel === 'high' 
                      ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                      : analysis.analysis.riskLevel === 'medium'
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                      : 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                    }`}>
                    {analysis.analysis.riskLevel.charAt(0).toUpperCase() + analysis.analysis.riskLevel.slice(1)}
                  </span>
                </div>
                <div className="mt-1 flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Clock className="w-4 h-4 mr-1" />
                  {formatDate(analysis.timestamp)}
                </div>
              </div>
              <img
                src={analysis.imageUrl}
                alt={analysis.analysis.pestType}
                className="w-20 h-20 rounded-lg object-cover"
              />
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Confiance: {(analysis.analysis.confidence * 100).toFixed(1)}%
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {analysis.analysis.recommendations.slice(0, 2).map((rec, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
                  >
                    {rec}
                  </span>
                ))}
                {analysis.analysis.recommendations.length > 2 && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400">
                    +{analysis.analysis.recommendations.length - 2} plus
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
        
        {analyses.length === 0 && (
          <div className="p-6 text-center text-gray-500 dark:text-gray-400">
            Aucune analyse effectuée
          </div>
        )}
      </div>
    </div>
  );
};