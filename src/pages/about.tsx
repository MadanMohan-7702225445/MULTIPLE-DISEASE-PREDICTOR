import React from "react";
import { Activity, Heart, Droplet, Settings as Lungs, LucideKey as Kidney, Users, BookOpen, Award } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <Activity className="h-12 w-12 text-blue-600 mx-auto" />
        <h1 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          About MediPredict
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Advanced disease prediction using machine learning to help you stay ahead of health risks
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            At MediPredict, our mission is to leverage cutting-edge technology to make healthcare more accessible, 
            proactive, and personalized. We believe that early detection is key to preventing serious health conditions 
            and improving overall quality of life.
          </p>
          <p className="text-gray-600 mb-4">
            By providing easy-to-use disease prediction tools, we empower individuals to take control of their health 
            and make informed decisions about their lifestyle and medical care.
          </p>
          <p className="text-gray-600">
            Our platform is designed to complement, not replace, professional medical advice. We encourage users to 
            share their prediction results with healthcare providers for proper diagnosis and treatment.
          </p>
        </div>
        <div className="relative h-64 md:h-auto">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
            alt="Medical technology" 
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-blue-50 border-none">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4 mx-auto">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2 text-center">Research-Based</h3>
              <p className="text-gray-600 text-center">
                Our prediction models are based on extensive medical research and validated datasets, ensuring reliable results.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-none">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4 mx-auto">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2 text-center">User-Centered</h3>
              <p className="text-gray-600 text-center">
                We prioritize user experience, making complex medical predictions accessible and easy to understand.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-none">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4 mx-auto">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2 text-center">Continuous Improvement</h3>
              <p className="text-gray-600 text-center">
                We constantly refine our prediction models based on the latest medical research and user feedback.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Diseases We Predict</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-red-100 text-red-500 mb-4">
              <Heart className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Heart Disease</h3>
            <p className="text-gray-600">
              Predict the risk of heart disease based on various health parameters like blood pressure, cholesterol, and more.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-500 mb-4">
              <Droplet className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Diabetes</h3>
            <p className="text-gray-600">
              Assess your risk of diabetes using factors like glucose levels, BMI, insulin, and age.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100 text-yellow-500 mb-4">
              <Lungs className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Liver Disease</h3>
            <p className="text-gray-600">
              Evaluate liver health based on bilirubin, albumin, and other important liver function indicators.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-500 mb-4">
              <Kidney className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Kidney Disease</h3>
            <p className="text-gray-600">
              Check kidney function health using creatinine, urea, and other kidney-related parameters.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
              alt="Dr. Sarah Johnson" 
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-medium text-gray-900">Dr. Sarah Johnson</h3>
            <p className="text-blue-600 mb-2">Chief Medical Officer</p>
            <p className="text-gray-600">
              Cardiologist with over 15 years of experience in preventive medicine and health technology.
            </p>
          </div>

          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
              alt="Dr. Michael Chen" 
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-medium text-gray-900">Dr. Michael Chen</h3>
            <p className="text-blue-600 mb-2">Lead Data Scientist</p>
            <p className="text-gray-600">
              PhD in Biostatistics with expertise in developing machine learning models for healthcare applications.
            </p>
          </div>

          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80" 
              alt="Emily Rodriguez" 
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-medium text-gray-900">Emily Rodriguez</h3>
            <p className="text-blue-600 mb-2">UX/UI Designer</p>
            <p className="text-gray-600">
              Specializes in creating intuitive and accessible healthcare interfaces for diverse user groups.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;