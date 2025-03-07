import React, { useState } from "react";
import { Link } from "react-router-dom";
import { History, Heart, Droplet, Settings as Lungs, LucideKey as Kidney, AlertCircle, CheckCircle, Calendar, Filter } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Select } from "../components/ui/select";
import { usePredictionStore, DiseaseType, PredictionResult } from "../store/predictionStore";
import { formatDate } from "../lib/utils";

const HistoryPage: React.FC = () => {
  const history = usePredictionStore((state) => state.history);
  const clearHistory = usePredictionStore((state) => state.clearHistory);
  const [filter, setFilter] = useState<DiseaseType | "all">("all");

  const filteredHistory = filter === "all" 
    ? history 
    : history.filter((item) => item.diseaseType === filter);

  const getDiseaseIcon = (type: DiseaseType) => {
    switch (type) {
      case "heart":
        return <Heart className="h-5 w-5 text-red-500" />;
      case "diabetes":
        return <Droplet className="h-5 w-5 text-blue-500" />;
      case "liver":
        return <Lungs className="h-5 w-5 text-yellow-500" />;
      case "kidney":
        return <Kidney className="h-5 w-5 text-green-500" />;
    }
  };

  const getDiseaseName = (type: DiseaseType) => {
    switch (type) {
      case "heart":
        return "Heart Disease";
      case "diabetes":
        return "Diabetes";
      case "liver":
        return "Liver Disease";
      case "kidney":
        return "Kidney Disease";
    }
  };

  const getResultColor = (result: boolean) => {
    return result ? "text-red-500" : "text-green-500";
  };

  const getResultText = (result: boolean) => {
    return result ? "High Risk" : "Low Risk";
  };

  const getResultIcon = (result: boolean) => {
    return result ? (
      <AlertCircle className="h-5 w-5 text-red-500" />
    ) : (
      <CheckCircle className="h-5 w-5 text-green-500" />
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <History className="h-12 w-12 text-blue-500 mx-auto" />
        <h1 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Prediction History
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          View and manage your previous disease prediction results
        </p>
      </div>

      <div className="mb-8 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center mb-4 sm:mb-0">
          <Filter className="h-5 w-5 text-gray-500 mr-2" />
          <Select
            options={[
              { value: "all", label: "All Diseases" },
              { value: "heart", label: "Heart Disease" },
              { value: "diabetes", label: "Diabetes" },
              { value: "liver", label: "Liver Disease" },
              { value: "kidney", label: "Kidney Disease" },
            ]}
            value={filter}
            onChange={(e) => setFilter(e.target.value as DiseaseType | "all")}
            className="w-48"
          />
        </div>
        <Button 
          variant="danger" 
          onClick={() => {
            if (confirm("Are you sure you want to clear all history? This action cannot be undone.")) {
              clearHistory();
            }
          }}
        >
          Clear History
        </Button>
      </div>

      {filteredHistory.length === 0 ? (
        <Card>
          <CardContent className="py-12">
            <div className="text-center">
              <History className="h-12 w-12 text-gray-400 mx-auto" />
              <h3 className="mt-2 text-lg font-medium text-gray-900">No prediction history found</h3>
              <p className="mt-1 text-sm text-gray-500">
                {filter === "all" 
                  ? "You haven't made any predictions yet." 
                  : `You haven't made any ${getDiseaseName(filter as DiseaseType).toLowerCase()} predictions yet.`}
              </p>
              <div className="mt-6">
                <Link to="/">
                  <Button variant="primary">Make a Prediction</Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {filteredHistory.map((prediction: PredictionResult) => (
            <Card key={prediction.id} className="overflow-hidden">
              <div className={`h-2 ${prediction.result ? "bg-red-500" : "bg-green-500"}`}></div>
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center">
                  {getDiseaseIcon(prediction.diseaseType)}
                  <CardTitle className="ml-2">{getDiseaseName(prediction.diseaseType)}</CardTitle>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  {formatDate(new Date(prediction.date))}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Result</h4>
                    <div className="flex items-center">
                      {getResultIcon(prediction.result)}
                      <span className={`ml-2 font-semibold ${getResultColor(prediction.result)}`}>
                        {getResultText(prediction.result)}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Probability</h4>
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-2.5 mr-2">
                        <div 
                          className={`h-2.5 rounded-full ${prediction.result ? "bg-red-500" : "bg-green-500"}`}
                          style={{ width: `${prediction.probability * 100}%` }}
                        ></div>
                      </div>
                      <span className="font-medium">{(prediction.probability * 100).toFixed(1)}%</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Input Parameters</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {Object.entries(prediction.inputs).map(([key, value]) => (
                      <div key={key} className="bg-gray-50 p-2 rounded">
                        <p className="text-xs text-gray-500">{key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}</p>
                        <p className="font-medium text-sm truncate">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <Link to={`/predict/${prediction.diseaseType}`}>
                    <Button variant="outline" size="sm">
                      Make Another Prediction
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default HistoryPage;