import { DiseaseType } from '../store/predictionStore';

// Mock prediction service - in a real app, this would call an API
export const predictDisease = async (
  diseaseType: DiseaseType,
  inputs: Record<string, any>
): Promise<{ result: boolean; probability: number }> => {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1500));
  
  // Mock prediction logic - this would be replaced with actual API calls
  let probability = 0;
  
  switch (diseaseType) {
    case 'heart':
      // Simple mock algorithm for heart disease
      const age = inputs.age || 0;
      const cholesterol = inputs.cholesterol || 0;
      const bloodPressure = inputs.bloodPressure || 0;
      
      probability = (age / 100) * 0.3 + (cholesterol / 300) * 0.4 + (bloodPressure / 180) * 0.3;
      probability = Math.min(Math.max(probability, 0.1), 0.9);
      break;
      
    case 'diabetes':
      // Simple mock algorithm for diabetes
      const glucose = inputs.glucose || 0;
      const bmi = inputs.bmi || 0;
      
      probability = (glucose / 200) * 0.6 + (bmi / 40) * 0.4;
      probability = Math.min(Math.max(probability, 0.1), 0.9);
      break;
      
    case 'liver':
      // Simple mock algorithm for liver disease
      const bilirubinTotal = inputs.bilirubinTotal || 0;
      const albumin = inputs.albumin || 0;
      
      probability = (bilirubinTotal / 20) * 0.5 + (1 - albumin / 5) * 0.5;
      probability = Math.min(Math.max(probability, 0.1), 0.9);
      break;
      
    case 'kidney':
      // Simple mock algorithm for kidney disease
      const creatinine = inputs.creatinine || 0;
      const urea = inputs.urea || 0;
      
      probability = (creatinine / 10) * 0.6 + (urea / 100) * 0.4;
      probability = Math.min(Math.max(probability, 0.1), 0.9);
      break;
      
    default:
      probability = 0.5;
  }
  
  // Round to 2 decimal places
  probability = Math.round(probability * 100) / 100;
  
  return {
    result: probability > 0.5,
    probability
  };
};