import React from 'react';
import { Link } from 'react-router-dom';

function ContinuousMonitoring() {
  const services = [
    {
      title: "Continuous Monitoring Services",
      items: [
        "Stay updated with our real-time monitoring services",
        "Alerts for any new information, such as arrests or other legal issues"
      ]
    },
    {
      title: "Criminal History Check",
      items: [
        "Interpol list",
        "UN/world Sanctions and SA PEP (politically exposed person)",
        "World Wide Consolidate AML (anti-money laundering) Database"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">Continuous Monitoring</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-4 border-blue-500">
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">{service.title}</h2>
              <ul className="list-disc pl-5 mb-6 text-gray-700">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="mb-2">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link 
            to="/services"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors duration-300 text-lg font-semibold"
          >
            Back to Services
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContinuousMonitoring;