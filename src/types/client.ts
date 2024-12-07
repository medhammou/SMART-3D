export interface Client {
  id: number;
  name: string;
  contact: string;
  email: string;
  phone: string;
  address: string;
  status: 'active' | 'inactive';
  lastIntervention: string;
  createdAt: string;
  updatedAt: string;
  notes?: string;
  interventions?: {
    id: number;
    date: string;
    type: string;
    status: string;
  }[];
  documents?: {
    id: number;
    name: string;
    type: string;
    url: string;
  }[];
}