import React, { useRef, useEffect } from 'react';

function About() {
  const missionRef = useRef(null);
  const visionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (missionRef.current) observer.observe(missionRef.current);
    if (visionRef.current) observer.observe(visionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black inline-block">About Us</h1>
          <div className="h-1 w-20 bg-orange-500 mx-auto mt-2"></div>
        </div>
        <section className="about-us mb-16">
          <div className="w-full md:w-10/12 mx-auto mb-16 flex flex-col md:flex-row items-start">
            <div className="w-full md:w-1/2 pr-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 text-left">
                Empowering Businesses with Accurate and Instant Identity Verification Solutions
              </h2>
            </div>
            <div className="w-full md:w-1/2 bg-white-100 border-l-4 border-white-500 text-black p-4 rounded-lg shadow-md">
              <p className="text-lg mb-2">VerifyNow offers seamless and secure identity verification and background check services tailored to your needs. Whether you're onboarding new employees, verifying tenant information, or conducting thorough background checks, VerifyNow ensures accuracy, reliability, and compliance.</p>

            </div>
          </div>

          <section className="why-choose-us mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center text-gray-800">Why Choose VerifyNow?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
                <div className="text-4xl mb-4 text-center">🔒</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 text-center">Accuracy</h3>
                <p className="text-gray-600 text-center">Our verification services are powered by the latest technology and comprehensive databases, ensuring accurate results every time.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
                <div className="text-4xl mb-4 text-center">🚀</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 text-center">Compliance</h3>
                <p className="text-gray-600 text-center">VerifyNow adheres to all relevant laws and regulations, providing you with peace of mind and reducing legal risks.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
                <div className="text-4xl mb-4 text-center">🤝</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 text-center">Flexibility</h3>
                <p className="text-gray-600 text-center">Whether you need a single check or bulk processing, our services are scalable to meet your specific business requirements.</p>
              </div>
            </div>
          </section>

          <div ref={missionRef} className="opacity-0 transition-all duration-1000 ease-out mb-16 transform translate-y-10">
            <div className="bg-gradient-to-r from-orange-100 to-orange-200 rounded-lg shadow-lg p-8">
              <div className="flex flex-col md:flex-row justify-between items-stretch">
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-bold mb-4 text-gray-800 flex items-center">
                      <span className="text-orange-500 mr-2">🎯</span> Our Mission
                    </h3>
                    <p className="text-lg mb-4 text-gray-700 leading-relaxed">
                      To provide businesses with the tools they need to verify identities quickly and securely, ensuring trust and reducing fraud across industries.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-8 md:border-l-2 border-orange-300 flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-bold mb-4 text-gray-800 flex items-center">
                      <span className="text-orange-500 mr-2">🔭</span> Our Vision
                    </h3>
                    <p className="text-lg mb-4 text-gray-700 leading-relaxed">
                      To be the leading provider of verification services, recognized for innovation, reliability, and excellence in customer service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </section>
      </div>
    </div>
  );
}

export default About;