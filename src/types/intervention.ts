export type InterventionPriority = 'low' | 'medium' | 'high' | 'urgent';
export type InterventionStatus = 'planned' | 'in-progress' | 'completed' | 'cancelled';

export interface Product {
  id: string;
  name: string;
  dosage: string;
  unit: string;
  safetyPeriod: number; // in hours
  restrictions: string[];
}

export interface ControlPoint {
  id: string;
  label: string;
  description: string;
  frequency: string;
  isRequired: boolean;
}

export interface Protocol {
  id: string;
  pestType: string;
  treatmentMethods: string[];
  products: Product[];
  frequency: string;
  duration: number; // in minutes
  controlPoints: ControlPoint[];
  preventiveMeasures: string[];
  safetyInstructions: string[];
}

export interface Intervention {
  id: string;
  clientId: string;
  protocol: Protocol;
  scheduledDate: string;
  estimatedDuration: number;
  priority: InterventionPriority;
  status: InterventionStatus;
  location: {
    address: string;
    coordinates: [number, number];
  };
  assignedTechnician?: string;
  notes?: string;
}