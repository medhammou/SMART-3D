import React from 'react';
import { AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { AnalysisResult as AnalysisResultType } from '../../types/identification';

interface Props {
  result: AnalysisResultType;
}

export const AnalysisResult: React.FC<Props> = ({ result }) => {
  const getRiskIcon = (level: string) => {
    switch (level) {
      case 'high':
        return <AlertTriangle className="w-6 h-6 text-red-500" />;
      case 'medium':
        return <Info className="w-6 h-6 text-yellow-500" />;
      default:
        return <CheckCircle className="w-6 h-6 text-green-500" />;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <div className="flex items-start space-x-4">
        <img
          src={result.imageUrl}
          alt="Analyzed image"
          className="w-32 h-32 object-cover rounded-lg"
        />
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            {getRiskIcon(result.analysis.riskLevel)}
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {result.analysis.pestType}
            </h3>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Confiance: {(result.analysis.confidence * 100).toFixed(1)}%
          </p>
          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Recommandations:
            </h4>
            <ul className="mt-2 space-y-2">
              {result.analysis.recommendations.map((rec, index) => (
                <li
                  key={index}
                  className="text-sm text-gray-600 dark:text-gray-400 flex items-center space-x-2"
                >
                  <span>•</span>
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};