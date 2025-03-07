import React from "react";
import { HelpCircle } from "lucide-react";

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How accurate are the disease predictions?",
      answer: "Our prediction models are based on statistical analysis of large medical datasets and provide an estimated risk level. While we strive for high accuracy, these predictions should be used as a screening tool rather than a definitive diagnosis. Always consult with a healthcare professional for proper medical advice."
    },
    {
      question: "Is my health data secure?",
      answer: "Yes, we take data privacy very seriously. All your health information is stored locally in your browser and is not transmitted to any external servers. You can clear your prediction history at any time from the History page."
    },
    {
      question: "Can I use this tool instead of seeing a doctor?",
      answer: "No, this tool is designed to complement, not replace, professional medical care. The predictions provide risk assessments based on the information you enter, but they cannot account for all factors that a healthcare provider would consider during an in-person examination."
    },
    {
      question: "How should I interpret the prediction results?",
      answer: "The results show your estimated risk level (high or low) and a probability percentage. A high risk result suggests you may have risk factors associated with the disease and should consider discussing these with a healthcare provider. A low risk result indicates fewer risk factors but doesn't guarantee you won't develop the condition."
    },
    {
      question: "What health parameters should I know before using the prediction tools?",
      answer: "Different disease predictions require different parameters. For heart disease, you'll need information like blood pressure, cholesterol levels, and ECG results. For diabetes, glucose levels and BMI are important. Having recent medical test results will help you get more accurate predictions."
    },
    {
      question: "How often should I check my disease risk?",
      answer: "For most people, checking once or twice a year is sufficient, especially after annual check-ups when you have updated health information. However, if you've made significant lifestyle changes or have been advised by your doctor to monitor certain conditions more closely, you might want to check more frequently."
    },
    {
      question: "Can I track changes in my risk over time?",
      answer: "Yes, all your prediction results are saved in the History section, allowing you to track changes in your risk levels over time. This can be particularly useful for monitoring how lifestyle changes or treatments affect your risk profile."
    },
    {
      question: "Are these predictions suitable for all age groups?",
      answer: "Our prediction models are primarily designed for adults. The accuracy may vary for very young individuals or the elderly, as these groups often have unique health considerations that may not be fully captured in our models."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <HelpCircle className="h-12 w-12 text-blue-600 mx-auto" />
        <h1 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Frequently Asked Questions
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Find answers to common questions about our disease prediction platform
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-8">
              <h3 className="text-lg font-medium text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Still have questions?</h3>
          <p className="text-gray-600 mb-4">
            If you couldn't find the answer to your question, please feel free to contact our support team.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;