import { useState } from 'react';
import { PestIdentificationService, PestIdentificationResult } from '../services/pestIdentification';

const pestIdentificationService = new PestIdentificationService();

export function usePestIdentification() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const analyzeImage = async (file: File): Promise<PestIdentificationResult | null> => {
    setIsAnalyzing(true);
    setError(null);

    try {
      const result = await pestIdentificationService.identifyPest(file);
      return result;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during analysis');
      return null;
    } finally {
      setIsAnalyzing(false);
    }
  };

  return {
    analyzeImage,
    isAnalyzing,
    error
  };
}