import React from "react";
import { AlertCircle, CheckCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../ui/card";

interface ResultCardProps {
  result: { result: boolean; probability: number } | null;
  diseaseType: "heart" | "diabetes" | "liver" | "kidney";
}

const ResultCard: React.FC<ResultCardProps> = ({ result, diseaseType }) => {
  const getDiseaseName = () => {
    switch (diseaseType) {
      case "heart":
        return "heart disease";
      case "diabetes":
        return "diabetes";
      case "liver":
        return "liver disease";
      case "kidney":
        return "kidney disease";
    }
  };

  return (
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
                ? `You may have a higher risk of ${getDiseaseName()}.`
                : `You have a lower risk of ${getDiseaseName()}.`}
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
  );
};

export default ResultCard;