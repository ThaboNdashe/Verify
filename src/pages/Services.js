import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  const services = [
    {
      icon: "flash-outline",
      title: "Identity Verification",
      description: "Instantly verify the authenticity of government-issued IDs, passports, and more using our advanced technology that scans over 6,500 documents from 200 countries.",
      link: "/services/identity-verification"
    },
    {
      icon: "shield-checkmark-outline",
      title: "Background Checks",
      description: "Comprehensive background screening for employment, tenant screening, and more, including criminal history, education, and employment verification.",
      link: "/services/background-checks"
    },
    {
      icon: "lock-closed-outline",
      title: "Continuous Monitoring",
      description: "Stay updated with our real-time monitoring services that alert you to any new information, such as arrests or other legal issues.",
      link: "/services/continuous-monitoring"
    },
    {
      icon: "people-outline",
      title: "Criminal History Check ",
      description: "Interpol list, UN/world Sanctions and SA PEP (politically exposed person), World Wide Consolidate AML (anti-money laundering) Database.",
      link: "/services/Criminal History Check"
    },
    {
      icon: "business-outline",
      title: "Credit Score/Consumer Profile",
      description: "Transunion, XDS (Express credit score),	Experian.",
      link: "/services/Credit Score or Consumer Profile"
    },
    {
      icon: "globe-outline",
      title: "Bank Confirmation ",
      description: "Realtime Bank Account Verifications, 13 banks (ABSA, FNB, Standard Bank, Nedbank, African Bank, Capitec, Investec, Mercantile Bank, Sasfin Bank, Discovery Bank, Finbond Mutual Bank, Grindrod Bank, Tyme Bank).",
      link: "/services/bank-confirmation"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black inline-block">Our Services</h1>
          <div className="h-1 w-20 bg-orange-500 mx-auto mt-2"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gradient-to-tr from-[#0a4661] to-[#235469] rounded-lg shadow-md p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg">
              <div>
                <ion-icon name={service.icon} class="text-5xl text-blue-300 mb-4"></ion-icon>
                <h2 className="text-2xl font-semibold mb-2 text-white">{service.title}</h2>
                <p className="text-blue-100 mb-4">{service.description}</p>
              </div>
              <Link 
                to={service.link}
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 text-center"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;