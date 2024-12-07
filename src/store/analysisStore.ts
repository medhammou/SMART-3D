import { create } from 'zustand';
import { AnalysisResult } from '../types/identification';

interface AnalysisStore {
  analyses: AnalysisResult[];
  currentAnalysis: AnalysisResult | null;
  addAnalysis: (analysis: AnalysisResult) => void;
  setCurrentAnalysis: (analysis: AnalysisResult | null) => void;
}

export const useAnalysisStore = create<AnalysisStore>((set) => ({
  analyses: [],
  currentAnalysis: null,
  addAnalysis: (analysis) => 
    set((state) => ({ analyses: [analysis, ...state.analyses] })),
  setCurrentAnalysis: (analysis) => 
    set({ currentAnalysis: analysis }),
}));