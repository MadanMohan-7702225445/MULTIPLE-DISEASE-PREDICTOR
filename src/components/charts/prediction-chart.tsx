import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { usePredictionStore, DiseaseType } from '../../store/predictionStore';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface PredictionChartProps {
  diseaseType: DiseaseType;
  chartType?: 'line' | 'bar';
}

const PredictionChart: React.FC<PredictionChartProps> = ({ 
  diseaseType, 
  chartType = 'line' 
}) => {
  const getPredictionsByType = usePredictionStore((state) => state.getPredictionsByType);
  const predictions = getPredictionsByType(diseaseType);

  // Only show the last 10 predictions
  const recentPredictions = predictions.slice(0, 10).reverse();

  const labels = recentPredictions.map((prediction, index) => `Prediction ${index + 1}`);
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Risk Probability',
        data: recentPredictions.map((prediction) => prediction.probability * 100),
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: `${diseaseType.charAt(0).toUpperCase() + diseaseType.slice(1)} Disease Risk Trend`,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
        title: {
          display: true,
          text: 'Risk Probability (%)',
        },
      },
    },
  };

  if (recentPredictions.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Risk Trend</CardTitle>
        </CardHeader>
        <CardContent className="h-64 flex items-center justify-center">
          <p className="text-gray-500">No prediction data available</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Risk Trend</CardTitle>
      </CardHeader>
      <CardContent>
        {chartType === 'line' ? (
          <Line options={options} data={data} />
        ) : (
          <Bar options={options} data={data} />
        )}
      </CardContent>
    </Card>
  );
};

export default PredictionChart;