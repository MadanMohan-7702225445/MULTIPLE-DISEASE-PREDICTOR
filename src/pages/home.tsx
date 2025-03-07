import React from "react";
import { Link } from "react-router-dom";
import { Activity, Heart, Droplet, Settings as Lungs, LucideKey as Kidney } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-20 md:py-28">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                <span className="block">Predict. Prevent. Protect.</span>
                <span className="block text-blue-200">Your Health Matters</span>
              </h1>
              <p className="mt-6 max-w-lg mx-auto text-xl text-blue-100 sm:max-w-3xl">
                Advanced disease prediction using machine learning to help you stay ahead of health risks.
                Get accurate predictions for multiple diseases in seconds.
              </p>
              <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                  <Link to="/predict/heart">
                    <Button
                      variant="primary"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm bg-white text-blue-700 hover:bg-blue-50 md:py-4 md:text-lg md:px-10"
                    >
                      Start Prediction
                    </Button>
                  </Link>
                  <Link to="/about">
                    <Button
                      variant="outline"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-800 bg-opacity-20 hover:bg-opacity-30 md:py-4 md:text-lg md:px-10"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Features</h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
              Comprehensive Disease Prediction
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Our platform offers prediction for multiple diseases using advanced machine learning algorithms.
            </p>
          </div>

          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-t-4 border-t-red-500 hover:shadow-md transition-shadow">
              <CardHeader>
                <Heart className="h-10 w-10 text-red-500" />
                <CardTitle className="mt-4">Heart Disease</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Predict the risk of heart disease based on various health parameters like blood pressure, cholesterol, and more.
                </p>
                <Link to="/predict/heart">
                  <Button variant="ghost" className="mt-4 text-red-600 hover:text-red-700">
                    Predict Now
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-blue-500 hover:shadow-md transition-shadow">
              <CardHeader>
                <Droplet className="h-10 w-10 text-blue-500" />
                <CardTitle className="mt-4">Diabetes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Assess your risk of diabetes using factors like glucose levels, BMI, insulin, and age.
                </p>
                <Link to="/predict/diabetes">
                  <Button variant="ghost" className="mt-4 text-blue-600 hover:text-blue-700">
                    Predict Now
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-yellow-500 hover:shadow-md transition-shadow">
              <CardHeader>
                <Lungs className="h-10 w-10 text-yellow-500" />
                <CardTitle className="mt-4">Liver Disease</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Evaluate liver health based on bilirubin, albumin, and other important liver function indicators.
                </p>
                <Link to="/predict/liver">
                  <Button variant="ghost" className="mt-4 text-yellow-600 hover:text-yellow-700">
                    Predict Now
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-green-500 hover:shadow-md transition-shadow">
              <CardHeader>
                <Kidney className="h-10 w-10 text-green-500" />
                <CardTitle className="mt-4">Kidney Disease</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Check kidney function health using creatinine, urea, and other kidney-related parameters.
                </p>
                <Link to="/predict/kidney">
                  <Button variant="ghost" className="mt-4 text-green-600 hover:text-green-700">
                    Predict Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Process</h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
              How It Works
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900">Enter Your Data</h3>
                <p className="mt-2 text-base text-gray-500">
                  Fill in the required health parameters specific to the disease you want to predict.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900">Get Instant Results</h3>
                <p className="mt-2 text-base text-gray-500">
                  Our advanced algorithms analyze your data and provide prediction results in seconds.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900">Track Your Health</h3>
                <p className="mt-2 text-base text-gray-500">
                  Save your results, monitor changes over time, and take proactive steps for your health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to check your health?</span>
            <span className="block text-blue-200">Start your prediction today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link to="/predict/heart">
                <Button
                  variant="primary"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;