import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Droplet, AlertCircle, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Select } from "../components/ui/select";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../components/ui/card";
import { predictDisease } from "../services/predictionService";
import { usePredictionStore } from "../store/predictionStore";

interface DiabetesFormData {
  pregnancies: number;
  glucose: number;
  bloodPressure: number;
  skinThickness: number;
  insulin: number;
  bmi: number;
  diabetesPedigree: number;
  age: number;
}

const DiabetesPrediction: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{ result: boolean; probability: number } | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm<DiabetesFormData>();
  const addPrediction = usePredictionStore((state) => state.addPrediction);

  const onSubmit = async (data: DiabetesFormData) => {
    setIsLoading(true);
    try {
      const predictionResult = await predictDisease("diabetes", data);
      setResult(predictionResult);
      addPrediction({
        diseaseType: "diabetes",
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
        <Droplet className="h-12 w-12 text-blue-500 mx-auto" />
        <h1 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Diabetes Prediction
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Fill in your health parameters to predict your risk of diabetes
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
                    label="Number of Pregnancies"
                    type="number"
                    error={errors.pregnancies?.message}
                    {...register("pregnancies", { 
                      required: "Number of pregnancies is required",
                      min: { value: 0, message: "Value must be positive" }
                    })}
                  />

                  <Input
                    label="Glucose (mg/dL)"
                    type="number"
                    error={errors.glucose?.message}
                    {...register("glucose", { 
                      required: "Glucose is required",
                      min: { value: 0, message: "Value must be positive" }
                    })}
                  />

                  <Input
                    label="Blood Pressure (mm Hg)"
                    type="number"
                    error={errors.bloodPressure?.message}
                    {...register("bloodPressure", { 
                      required: "Blood pressure is required",
                      min: { value: 0, message: "Value must be positive" }
                    })}
                  />

                  <Input
                    label="Skin Thickness (mm)"
                    type="number"
                    error={errors.skinThickness?.message}
                    {...register("skinThickness", { 
                      required: "Skin thickness is required",
                      min: { value: 0, message: "Value must be positive" }
                    })}
                  />

                  <Input
                    label="Insulin (μU/mL)"
                    type="number"
                    error={errors.insulin?.message}
                    {...register("insulin", { 
                      required: "Insulin is required",
                      min: { value: 0, message: "Value must be positive" }
                    })}
                  />

                  <Input
                    label="BMI (kg/m²)"
                    type="number"
                    step="0.1"
                    error={errors.bmi?.message}
                    {...register("bmi", { 
                      required: "BMI is required",
                      min: { value: 10, message: "BMI should be at least 10" },
                      max: { value: 70, message: "BMI should be less than 70" }
                    })}
                  />

                  <Input
                    label="Diabetes Pedigree Function"
                    type="number"
                    step="0.01"
                    error={errors.diabetesPedigree?.message}
                    {...register("diabetesPedigree", { 
                      required: "Diabetes pedigree is required",
                      min: { value: 0, message: "Value must be positive" }
                    })}
                  />

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
                </div>

                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-full" 
                  isLoading={isLoading}
                >
                  Predict Diabetes Risk
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
                      ? "You may have a higher risk of diabetes."
                      : "You have a lower risk of diabetes."}
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
              <CardTitle>About Diabetes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Diabetes is a chronic disease that occurs when the pancreas is no longer able to make insulin, or when the body cannot make good use of the insulin it produces.
              </p>
              <p className="text-gray-600 mb-4">
                There are two main types of diabetes:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Type 1 diabetes: The body does not produce insulin</li>
                <li>Type 2 diabetes: The body does not use insulin properly</li>
              </ul>
              <p className="mt-4 text-gray-600">
                Risk factors include family history, age, excess weight, physical inactivity, and certain ethnicities.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DiabetesPrediction;