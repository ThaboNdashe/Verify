import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../components/Modal'; // Ensure this path is correct

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: "flash-outline",
      title: "Identity Verification",
      description: "Instantly verify the authenticity of government-issued IDs, passports, and more using our advanced technology that scans over 6,500 documents from 200 countries.",
      description1: "You can also check the Nationality of a person by conducting a citizenship check. Other checks like Screening History and Marital Trace.",
      link: "/services/identity-verification"
    },
    {
      icon: "shield-checkmark-outline",
      title: "Background Checks",
      description: "Comprehensive background screening for employment, tenant screening, and more, including criminal history, education, and employment verification.",
      description1:"Verifynow conducts verifications of Matric and Senior Certificates. Verifynow can also carry out checks on tertialy qualifications directly with institutions globally.",
      link: "/services/background-checks"
    },
    {
      icon: "lock-closed-outline",
      title: "Continuous Monitoring",
      description: "Stay updated with our real-time monitoring services that alert you to any new information, such as arrests or other legal issues.",
      description1:"Verifynow uses automated tools and technologies to monitor the performance and security of an organization's systems and processes",
      link: "/services/continuous-monitoring"
    },
    {
      icon: "people-outline",
      title: "Criminal History Check",
      description: "Interpol list, UN/world Sanctions and SA PEP (politically exposed person), World Wide Consolidate AML (anti-money laundering) Database.",
      description1: "Verifynow assist you to verify and check an individual's criminal record by capturing digital fingerprints and checking their prints against the Automated Fingerprint Indentification System database.",
      link: "/services/criminal-history-check"
    },
    {
      icon: "business-outline",
      title: "Credit Score/Consumer Profile",
      description: "Transunion, XDS (Express credit score), Experian.",
      description1:"All credit checks are performed in a real-time electroni environment, ensuring fast and accurate delivery. As an accredited Credit Bureau, Verifynow sources credit information directly from major bureaus in South Africa.",
      link: "/services/credit-score-or-consumer-profile"
    },
    {
      icon: "globe-outline",
      title: "Bank Confirmation",
      description: "Realtime Bank Account Verifications, 13 banks (ABSA, FNB, Standard Bank, Nedbank, African Bank, Capitec, Investec, Mercantile Bank, Sasfin Bank, Discovery Bank, Finbond Mutual Bank, Grindrod Bank, Tyme Bank).",
      description1:"Confidently verify bank accounts when onboarding new customers or expanding existing relationships with TransUnion's Account Verification Services solution",
      link: "/services/bank-confirmation"
    }
  ];

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 relative inline-block">
            Our Services
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-orange-500"></span>
          </h1>
          <p className="text-xl text-blue-600 max-w-2xl mx-auto">
            Cutting-edge solutions for identity verification and risk management
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg transform rotate-1 group-hover:rotate-3 transition-transform duration-300"></div>
              <div className="relative bg-white text-gray-800 rounded-lg p-5 shadow-lg h-full flex flex-col justify-between transform group-hover:-translate-y-2 transition-transform duration-300">
                <div>
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                      <ion-icon name={service.icon} className="text-xl text-indigo-600"></ion-icon>
                    </div>
                    <h2 className="text-lg font-semibold leading-tight">{service.title}</h2>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{service.description}</p>
                </div>
                <button 
                  onClick={() => openModal(service)}
                  className="inline-flex items-center text-sm text-indigo-600 font-semibold hover:text-indigo-800 transition-colors duration-300"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedService && (
        <Modal service={selectedService} onClose={closeModal} />
      )}
    </div>
  );
}

export default Services;