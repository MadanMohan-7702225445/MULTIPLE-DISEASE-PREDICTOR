import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { LucideKey as Kidney, AlertCircle, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Select } from "../components/ui/select";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../components/ui/card";
import { predictDisease } from "../services/predictionService";
import { usePredictionStore } from "../store/predictionStore";

interface KidneyDiseaseFormData {
  age: number;
  bloodPressure: number;
  specificGravity: number;
  albumin: number;
  sugar: number;
  redBloodCells: string;
  pus: number;
  bacteriaCount: number;
  bloodGlucose: number;
  bloodUrea: number;
  serumCreatinine: number;
  sodium: number;
  potassium: number;
  hemoglobin: number;
  packedCellVolume: number;
  whiteBloodCellCount: number;
}

const KidneyDiseasePrediction: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{ result: boolean; probability: number } | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm<KidneyDiseaseFormData>();
  const addPrediction = usePredictionStore((state) => state.addPrediction);

  const onSubmit = async (data: KidneyDiseaseFormData) => {
    setIsLoading(true);
    try {
      const predictionResult = await predictDisease("kidney", data);
      setResult(predictionResult);
      addPrediction({
        diseaseType: "kidney",
        result: predictionResult.result,
        probability: predictionResult.probability,
        inputs: data,
      });
    } catch (error) {
      console.error("Prediction error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <Kidney className="h-12 w-12 text-green-500 mx-auto" />
        <h1 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Kidney Disease Prediction
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Fill in your health parameters to predict your risk of kidney disease
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Enter Your Health Parameters</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Age"
                    type="number"
                    error={errors.age?.message}
                    {...register("age", { 
                      required: "Age is required",
                      min: { value: 1, message: "Age must be positive" },
                      max: { value: 120, message: "Age must be less than 120" }
                    })}
                  />

                  <Input
                    label="Blood Pressure (mm Hg)"
                    type="number"
                    error={errors.bloodPressure?.message}
                    {...register("bloodPressure", { 
                      required: "Blood pressure is required",
                      min: { value: 50, message: "Blood pressure should be at least 50" },
                      max: { value: 200, message: "Blood pressure should be less than 200" }
                    })}
                  />

                  <Input
                    label="Specific Gravity"
                    type="number"
                    step="0.001"
                    error={errors.specificGravity?.message}
                    {...register("specificGravity", { 
                      required: "Specific gravity is required",
                      min: { value: 1.005, message: "Value should be at least 1.005" },
                      max: { value: 1.030, message: "Value should be less than 1.030" }
                    })}
                  />

                  <Input
                    label="Albumin (0-5)"
                    type="number"
                    error={errors.albumin?.message}
                    {...register("albumin", { 
                      required: "Albumin is required",
                      min: { value: 0, message: "Value should be at least 0" },
                      max: { value: 5, message: "Value should be less than 5" }
                    })}
                  />

                  <Input
                    label="Sugar (0-5)"
                    type="number"
                    error={errors.sugar?.message}
                    {...register("sugar", { 
                      required: "Sugar is required",
                      min: { value: 0, message: "Value should be at least 0" },
                      max: { value: 5, message: "Value should be less than 5" }
                    })}
                  />

                  <Select
                    label="Red Blood Cells"
                    error={errors.redBloodCells?.message}
                    options={[
                      { value: "normal", label: "Normal" },
                      { value: "abnormal", label: "Abnormal" }
                    ]}
                    {...register("redBloodCells", { required: "Red blood cells is required" })}
                  />

                  <Input
                    label="Pus Cell Count"
                    type="number"
                    error={errors.pus?.message}
                    {...register("pus", { 
                      required: "Pus cell count is required",
                      min: { value: 0, message: "Value must be positive" }
                    })}
                  />

                  <Input
                    label="Bacteria Count"
                    type="number"
                    error={errors.bacteriaCount?.message}
                    {...register("bacteriaCount", { 
                      required: "Bacteria count is required",
                      min: { value: 0, message: "Value must be positive" }
                    })}
                  />

                  <Input
                    label="Blood Glucose (mg/dL)"
                    type="number"
                    error={errors.bloodGlucose?.message}
                    {...register("bloodGlucose", { 
                      required: "Blood glucose is required",
                      min: { value: 0, message: "Value must be positive" }
                    })}
                  />

                  <Input
                    label="Blood Urea (mg/dL)"
                    type="number"
                    error={errors.bloodUrea?.message}
                    {...register("bloodUrea", { 
                      required: "Blood urea is required",
                      min: { value: 0, message: "Value must be positive" }
                    })}
                  />

                  <Input
                    label="Serum Creatinine (mg/dL)"
                    type="number"
                    step="0.1"
                    error={errors.serumCreatinine?.message}
                    {...register("serumCreatinine", { 
                      required: "Serum creatinine is required",
                      min: { value: 0, message: "Value must be positive" }
                    })}
                  />

                  <Input
                    label="Sodium (mEq/L)"
                    type="number"
                    error={errors.sodium?.message}
                    {...register("sodium", { 
                      required: "Sodium is required",
                      min: { value: 0, message: "Value must be positive" }
                    })}
                  />

                  <Input
                    label="Potassium (mEq/L)"
                    type="number"
                    step="0.1"
                    error={errors.potassium?.message}
                    {...register("potassium", { 
                      required: "Potassium is required",
                      min: { value: 0, message: "Value must be positive" }
                    })}
                  />

                  <Input
                    label="Hemoglobin (g/dL)"
                    type="number"
                    step="0.1"
                    error={errors.hemoglobin?.message}
                    {...register("hemoglobin", { 
                      required: "Hemoglobin is required",
                      min: { value: 0, message: "Value must be positive" }
                    })}
                  />

                  <Input
                    label="Packed Cell Volume (%)"
                    type="number"
                    error={errors.packedCellVolume?.message}
                    {...register("packedCellVolume", { 
                      required: "Packed cell volume is required",
                      min: { value: 0, message: "Value must be positive" },
                      max: { value: 100, message: "Value must be less than 100" }
                    })}
                  />

                  <Input
                    label="White Blood Cell Count (cells/mm³)"
                    type="number"
                    error={errors.whiteBloodCellCount?.message}
                    {...register("whiteBloodCellCount", { 
                      required: "White blood cell count is required",
                      min: { value: 0, message: "Value must be positive" }
                    })}
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-full" 
                  isLoading={isLoading}
                >
                  Predict Kidney Disease Risk
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Prediction Result</CardTitle>
            </CardHeader>
            <CardContent>
              {result ? (
                <div className="text-center">
                  <div className="mb-4">
                    {result.result ? (
                      <AlertCircle className="h-16 w-16 text-red-500 mx-auto" />
                    ) : (
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {result.result ? "High Risk" : "Low Risk"}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {result.result
                      ? "You may have a higher risk of kidney disease."
                      : "You have a lower risk of kidney disease."}
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Probability</p>
                    <div className="w-full bg-gray-300 rounded-full h-4">
                      <div
                        className={`h-4 rounded-full ${
                          result.result ? "bg-red-500" : "bg-green-500"
                        }`}
                        style={{ width: `${result.probability * 100}%` }}
                      ></div>
                    </div>
                    <p className="mt-2 font-medium">
                      {(result.probability * 100).toFixed(1)}%
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">
                    Fill in the form and submit to see your prediction results.
                  </p>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-center">
              <p className="text-xs text-gray-500 text-center">
                This prediction is based on statistical models and should not replace professional medical advice.
                Always consult with a healthcare provider for proper diagnosis.
              </p>
            </CardFooter>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>About Kidney Disease</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Chronic kidney disease (CKD) is a condition characterized by a gradual loss of kidney function over time. Common causes include:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Diabetes</li>
                <li>High blood pressure</li>
                <li>Glomerulonephritis</li>
                <li>Polycystic kidney disease</li>
              </ul>
              <p className="mt-4 text-gray-600">
                Risk factors include diabetes, high blood pressure, heart disease, smoking, obesity, and family history of kidney disease.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default KidneyDiseasePrediction;