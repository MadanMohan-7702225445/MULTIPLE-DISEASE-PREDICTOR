import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Settings as Lungs, AlertCircle, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Select } from "../components/ui/select";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../components/ui/card";
import { predictDisease } from "../services/predictionService";
import { usePredictionStore } from "../store/predictionStore";

interface LiverDiseaseFormData {
  age: number;
  gender: string;
  totalBilirubin: number;
  directBilirubin: number;
  alkalinePhosphatase: number;
  alamineAminotransferase: number;
  aspartateAminotransferase: number;
  totalProteins: number;
  albumin: number;
  albuminGlobulinRatio: number;
}

const LiverDiseasePrediction: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{ result: boolean; probability: number } | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm<LiverDiseaseFormData>();
  const addPrediction = usePredictionStore((state) => state.addPrediction);

  const onSubmit = async (data: LiverDiseaseFormData) => {
    setIsLoading(true);
    try {
      const predictionResult = await predictDisease("liver", data);
      setResult(predictionResult);
      addPrediction({
        diseaseType: "liver",
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
        <Lungs className="h-12 w-12 text-yellow-500 mx-auto" />
        <h1 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Liver Disease Prediction
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Fill in your health parameters to predict your risk of liver disease
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

                  <Select
                    label="Gender"
                    error={errors.gender?.message}
                    options={[
                      { value: "male", label: "Male" },
                      { value: "female", label: "Female" }
                    ]}
                    {...register("gender", { required: "Gender is required" })}
                  />

                  <Input
                    label="Total Bilirubin (mg/dL)"
                    type="number"
                    step="0.01"
                    error={errors.totalBilirubin?.message}
                    {...register("totalBilirubin", { 
                      required: "Total bilirubin is required",
                      min: { value: 0, message: "Value must be positive" }
                    })}
                  />

                  <Input
                    label="Direct Bilirubin (mg/dL)"
                    type="number"
                    step="0.01"
                    error={errors.directBilirubin?.message}
                    {...register("directBilirubin", { 
                      required: "Direct bilirubin is required",
                      min: { value: 0, message: "Value must be positive" }
                    })}
                  />

                  <Input
                    label="Alkaline Phosphatase (IU/L)"
                    type="number"
                    error={errors.alkalinePhosphatase?.message}
                    {...register("alkalinePhosphatase", { 
                      required: "Alkaline phosphatase is required",
                      min: { value: 0, message: "Value must be positive" }
                    })}
                  />

                  <Input
                    label="Alamine Aminotransferase (IU/L)"
                    type="number"
                    error={errors.alamineAminotransferase?.message}
                    {...register("alamineAminotransferase", { 
                      required: "Alamine aminotransferase is required",
                      min: { value: 0, message: "Value must be positive" }
                    })}
                  />

                  <Input
                    label="Aspartate Aminotransferase (IU/L)"
                    type="number"
                    error={errors.aspartateAminotransferase?.message}
                    {...register("aspartateAminotransferase", { 
                      required: "Aspartate aminotransferase is required",
                      min: { value: 0, message: "Value must be positive" }
                    })}
                  />

                  <Input
                    label="Total Proteins (g/dL)"
                    type="number"
                    step="0.1"
                    error={errors.totalProteins?.message}
                    {...register("totalProteins", { 
                      required: "Total proteins is required",
                      min: { value: 0, message: "Value must be positive" }
                    })}
                  />

                  <Input
                    label="Albumin (g/dL)"
                    type="number"
                    step="0.1"
                    error={errors.albumin?.message}
                    {...register("albumin", { 
                      required: "Albumin is required",
                      min: { value: 0, message: "Value must be positive" }
                    })}
                  />

                  <Input
                    label="Albumin/Globulin Ratio"
                    type="number"
                    step="0.01"
                    error={errors.albuminGlobulinRatio?.message}
                    {...register("albuminGlobulinRatio", { 
                      required: "Albumin/globulin ratio is required",
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
                  Predict Liver Disease Risk
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
                      ? "You may have a higher risk of liver disease."
                      : "You have a lower risk of liver disease."}
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
              <CardTitle>About Liver Disease</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Liver disease refers to any condition that damages the liver and prevents it from functioning well. Common types include:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Hepatitis</li>
                <li>Fatty liver disease</li>
                <li>Cirrhosis</li>
                <li>Liver cancer</li>
              </ul>
              <p className="mt-4 text-gray-600">
                Risk factors include alcohol consumption, obesity, viral infections, and certain medications.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LiverDiseasePrediction;