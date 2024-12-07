export interface PestAnalysis {
  pestType: string;
  confidence: number;
  riskLevel: 'low' | 'medium' | 'high';
  recommendations: string[];
}

export interface Location {
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
}

export interface AnalysisResult {
  id: string;
  imageUrl: string;
  timestamp: string;
  analysis: PestAnalysis;
  detectedLocations: Location[];
}