import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent } from "../components/ui/card";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <Mail className="h-12 w-12 text-blue-600 mx-auto" />
        <h1 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Contact Us
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Have questions or feedback? We'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-500 mb-4">
                    <Send className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      label="Email Address"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Input
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={6}
                      className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <Button 
                    type="submit" 
                    variant="primary" 
                    className="w-full" 
                    isLoading={isSubmitting}
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="mb-6">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex">
                  <Mail className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Email</p>
                    <a href="mailto:info@medipredict.com" className="text-sm text-gray-600 hover:text-blue-600">
                      info@medipredict.com
                    </a>
                  </div>
                </div>
                <div className="flex">
                  <Phone className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Phone</p>
                    <a href="tel:+1-800-123-4567" className="text-sm text-gray-600 hover:text-blue-600">
                      +1 (800) 123-4567
                    </a>
                  </div>
                </div>
                <div className="flex">
                  <MapPin className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Address</p>
                    <p className="text-sm text-gray-600">
                      123 Health Avenue<br />
                      San Francisco, CA 94103<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Office Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <p className="text-sm text-gray-600">Monday - Friday</p>
                  <p className="text-sm font-medium text-gray-900">9:00 AM - 6:00 PM</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm text-gray-600">Saturday</p>
                  <p className="text-sm font-medium text-gray-900">10:00 AM - 4:00 PM</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm text-gray-600">Sunday</p>
                  <p className="text-sm font-medium text-gray-900">Closed</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Response Time: We aim to respond to all inquiries within 24-48 business hours.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;