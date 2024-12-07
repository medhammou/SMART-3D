import { create } from 'zustand';
import { Protocol, Intervention } from '../types/intervention';

interface InterventionStore {
  protocols: Protocol[];
  interventions: Intervention[];
  addProtocol: (protocol: Protocol) => void;
  addIntervention: (intervention: Intervention) => void;
  updateIntervention: (id: string, updates: Partial<Intervention>) => void;
  getProtocolByPestType: (pestType: string) => Protocol | undefined;
}

export const useInterventionStore = create<InterventionStore>((set, get) => ({
  protocols: [],
  interventions: [],
  
  addProtocol: (protocol) =>
    set((state) => ({
      protocols: [...state.protocols, protocol]
    })),
    
  addIntervention: (intervention) =>
    set((state) => ({
      interventions: [...state.interventions, intervention]
    })),
    
  updateIntervention: (id, updates) =>
    set((state) => ({
      interventions: state.interventions.map((intervention) =>
        intervention.id === id
          ? { ...intervention, ...updates }
          : intervention
      )
    })),
    
  getProtocolByPestType: (pestType) => {
    const { protocols } = get();
    return protocols.find((p) => p.pestType === pestType);
  },
}));