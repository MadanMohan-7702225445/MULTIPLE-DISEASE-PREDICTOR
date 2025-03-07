import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type DiseaseType = 'heart' | 'diabetes' | 'liver' | 'kidney';

export interface PredictionResult {
  id: string;
  diseaseType: DiseaseType;
  result: boolean;
  probability: number;
  date: string;
  inputs: Record<string, any>;
}

interface PredictionState {
  history: PredictionResult[];
  addPrediction: (prediction: Omit<PredictionResult, 'id' | 'date'>) => void;
  clearHistory: () => void;
  getPredictionsByType: (type: DiseaseType) => PredictionResult[];
}

export const usePredictionStore = create<PredictionState>()(
  persist(
    (set, get) => ({
      history: [],
      addPrediction: (prediction) => {
        const newPrediction: PredictionResult = {
          ...prediction,
          id: crypto.randomUUID(),
          date: new Date().toISOString(),
        };
        set((state) => ({
          history: [newPrediction, ...state.history],
        }));
      },
      clearHistory: () => set({ history: [] }),
      getPredictionsByType: (type) => {
        return get().history.filter((prediction) => prediction.diseaseType === type);
      },
    }),
    {
      name: 'prediction-storage',
    }
  )
);