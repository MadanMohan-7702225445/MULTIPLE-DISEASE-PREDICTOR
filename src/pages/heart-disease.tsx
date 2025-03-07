import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Heart, AlertCircle, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Select } from "../components/ui/select";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../components/ui/card";
import { predictDisease } from "../services/predictionService";
import { usePredictionStore } from "../store/predictionStore";

interface HeartDiseaseFormData {
  age: number;
  sex: string;
  chestPainType: string;
  restingBP: number;
  cholesterol: number;
  fastingBS: string;
  restingECG: string;
  maxHR: number;
  exerciseAngina: string;
  oldpeak: number;
  stSlope: string;
}

const HeartDiseasePrediction: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{ result: boolean; probability: number } | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm<HeartDiseaseFormData>();
  const addPrediction = usePredictionStore((state) => state.addPrediction);

  const onSubmit = async (data: HeartDiseaseFormData) => {
    setIsLoading(true);
    try {
      const predictionResult = await predictDisease("heart", data);
      setResult(predictionResult);
      addPrediction({
        diseaseType: "heart",
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
        <Heart className="h-12 w-12 text-red-500 mx-auto" />
        <h1 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Heart Disease Prediction
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Fill in your health parameters to predict your risk of heart disease
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
                    label="Sex"
                    error={errors.sex?.message}
                    options={[
                      { value: "male", label: "Male" },
                      { value: "female", label: "Female" }
                    ]}
                    {...register("sex", { required: "Sex is required" })}
                  />

                  <Select
                    label="Chest Pain Type"
                    error={errors.chestPainType?.message}
                    options={[
                      { value: "typical", label: "Typical Angina" },
                      { value: "atypical", label: "Atypical Angina" },
                      { value: "nonanginal", label: "Non-Anginal Pain" },
                      { value: "asymptomatic", label: "Asymptomatic" }
                    ]}
                    {...register("chestPainType", { required: "Chest pain type is required" })}
                  />

                  <Input
                    label="Resting Blood Pressure (mm Hg)"
                    type="number"
                    error={errors.restingBP?.message}
                    {...register("restingBP", { 
                      required: "Resting BP is required",
                      min: { value: 80, message: "BP should be at least 80" },
                      max: { value: 200, message: "BP should be less than 200" }
                    })}
                  />

                  <Input
                    label="Cholesterol (mg/dl)"
                    type="number"
                    error={errors.cholesterol?.message}
                    {...register("cholesterol", { 
                      required: "Cholesterol is required",
                      min: { value: 100, message: "Cholesterol should be at least 100" }
                    })}
                  />

                  <Select
                    label="Fasting Blood Sugar > 120 mg/dl"
                    error={errors.fastingBS?.message}
                    options={[
                      { value: "true", label: "Yes" },
                      { value: "false", label: "No" }
                    ]}
                    {...register("fastingBS", { required: "Fasting blood sugar is required" })}
                  />

                  <Select
                    label="Resting ECG"
                    error={errors.restingECG?.message}
                    options={[
                      { value: "normal", label: "Normal" },
                      { value: "st-t", label: "ST-T Wave Abnormality" },
                      { value: "lv", label: "Left Ventricular Hypertrophy" }
                    ]}
                    {...register("restingECG", { required: "Resting ECG is required" })}
                  />

                  <Input
                    label="Maximum Heart Rate"
                    type="number"
                    error={errors.maxHR?.message}
                    {...register("maxHR", { 
                      required: "Maximum heart rate is required",
                      min: { value: 60, message: "Heart rate should be at least 60" },
                      max: { value: 220, message: "Heart rate should be less than 220" }
                    })}
                  />

                  <Select
                    label="Exercise-Induced Angina"
                    error={errors.exerciseAngina?.message}
                    options={[
                      { value: "yes", label: "Yes" },
                      { value: "no", label: "No" }
                    ]}
                    {...register("exerciseAngina", { required: "Exercise angina is required" })}
                  />

                  <Input
                    label="ST Depression (Oldpeak)"
                    type="number"
                    step="0.1"
                    error={errors.oldpeak?.message}
                    {...register("oldpeak", { 
                      required: "ST depression is required",
                      min: { value: 0, message: "Value should be at least 0" }
                    })}
                  />

                  <Select
                    label="ST Slope"
                    error={errors.stSlope?.message}
                    options={[
                      { value: "upsloping", label: "Upsloping" },
                      { value: "flat", label: "Flat" },
                      { value: "downsloping", label: "Downsloping" }
                    ]}
                    {...register("stSlope", { required: "ST slope is required" })}
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-full" 
                  isLoading={isLoading}
                >
                  Predict Heart Disease Risk
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
                      ? "You may have a higher risk of heart disease."
                      : "You have a lower risk of heart disease."}
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
              <CardTitle>About Heart Disease</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Heart disease is a leading cause of death worldwide. It includes various conditions that affect the heart, such as:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Coronary artery disease</li>
                <li>Heart failure</li>
                <li>Arrhythmias</li>
                <li>Valve diseases</li>
              </ul>
              <p className="mt-4 text-gray-600">
                Risk factors include high blood pressure, high cholesterol, smoking, diabetes, obesity, and family history.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HeartDiseasePrediction;