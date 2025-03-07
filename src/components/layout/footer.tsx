import React from "react";
import { Link } from "react-router-dom";
import { Activity, Github, Twitter, Facebook } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center">
              <Activity className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">MediPredict</span>
            </div>
            <p className="text-gray-500 text-base">
              Advanced disease prediction using machine learning to help you stay ahead of health risks.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Predictions
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/predict/heart" className="text-base text-gray-500 hover:text-gray-900">
                      Heart Disease
                    </Link>
                  </li>
                  <li>
                    <Link to="/predict/diabetes" className="text-base text-gray-500 hover:text-gray-900">
                      Diabetes
                    </Link>
                  </li>
                  <li>
                    <Link to="/predict/liver" className="text-base text-gray-500 hover:text-gray-900">
                      Liver Disease
                    </Link>
                  </li>
                  <li>
                    <Link to="/predict/kidney" className="text-base text-gray-500 hover:text-gray-900">
                      Kidney Disease
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/faq" className="text-base text-gray-500 hover:text-gray-900">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-base text-gray-500 hover:text-gray-900">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-base text-gray-500 hover:text-gray-900">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/privacy" className="text-base text-gray-500 hover:text-gray-900">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms" className="text-base text-gray-500 hover:text-gray-900">
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/about" className="text-base text-gray-500 hover:text-gray-900">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/team" className="text-base text-gray-500 hover:text-gray-900">
                      Team
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} MediPredict. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;