import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Make sure to create this CSS file

function Home() {
  const [showButton, setShowButton] = useState(false);
  const [animateHero, setAnimateHero] = useState(false);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const featureRefs = [useRef(null), useRef(null), useRef(null)];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const slidingTexts = [
    "Providing accurate and instant identity verification solutions.",
    "Ensuring trust and security in your business processes.",
    "Streamlining background checks for faster onboarding."
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Trigger hero animation after a short delay
    const animationTimer = setTimeout(() => {
      setAnimateHero(true);
    }, 100);

    // Set up Intersection Observer for mission, vision, and features
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Trigger when 50% of the element is visible
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Delay the animation for each feature
          setTimeout(() => {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }, index * 300); // 300ms delay between each feature
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (missionRef.current) observer.observe(missionRef.current);
    if (visionRef.current) observer.observe(visionRef.current);
    featureRefs.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    // Add this new interval for text sliding
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % slidingTexts.length);
    }, 5000); // Change text every 5 seconds

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(animationTimer);
      observer.disconnect();
      clearInterval(textInterval);
    };
  }, []);

  return (
    <main className="relative">
      <Link
        to="/services"
        className={`fixed top-24 right-4 bg-primary-600 text-white p-2 rounded-full shadow-lg hover:bg-primary-700 transition-all duration-300 z-50 ${showButton ? 'translate-x-0' : 'translate-x-full'
          }`}
        style={{
          transitionProperty: 'transform, opacity',
          transitionDuration: '300ms',
          opacity: showButton ? 1 : 0,
        }}
      >       
        Verify Now
      </Link>

      <section
        className="hero bg-cover bg-center text-white text-center min-h-screen flex items-center relative"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/verified.jpg)`,
          marginTop: '-80px', // Adjust this value to match your navbar height
          paddingTop: '80px', // Add padding to push content down
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className={`hero-content mt-16 transition-all duration-1000 ease-out ${animateHero ? 'opacity-100                             translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
              Your Trusted Partner for{' '}
              <span className="text-blue-300">Secure Verification</span>
            </h1>
            <div className="h-20 overflow-hidden"> {/* Container for sliding text */}
              {slidingTexts.map((text, index) => (
                <p
                  key={index}
                  className={`text-xl md:text-2xl lg:text-3xl font-bold italic text-gray-200 sliding-text ${
                    index === currentTextIndex ? 'active' : ''
                  }`}
                >
                  {text}
                </p>
              ))}
            </div>
            <Link 
              to="/about"
              className="inline-block bg-white text-primary-700 hover:bg-gray-200 font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 mt-8"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <section className="about-us py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">
              Empowering Businesses with
              <span className="block text-blue-600">Accurate and Instant Identity Verification</span>
            </h2>
            <div className="bg-white p-8 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full "></div>
              <p className="text-xl mb-6 text-gray-700 leading-relaxed">
                VerifyNow offers seamless and secure identity verification and background check services tailored to your needs. Our cutting-edge solutions provide businesses with the confidence they need to make informed decisions quickly and securely.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Whether you're onboarding new employees, verifying tenant information, or conducting thorough background checks, VerifyNow ensures accuracy, reliability, and compliance with evolving regulatory requirements.
              </p>
              <div className="mt-8 flex items-center justify-center"></div>
            </div>
            <div className="mt-12 flex justify-center space-x-8">
              <div className="text-center">
                <span className="text-4xl font-bold text-blue-600">99.9%</span>
                <p className="text-gray-600 mt-2">Accuracy Rate</p>
              </div>
              <div className="text-center">
                <span className="text-4xl font-bold text-blue-600">24/7</span>
                <p className="text-gray-600 mt-2">Support</p>
              </div>
              <div className="text-center">
                <span className="text-4xl font-bold text-blue-600">100+</span>
                <p className="text-gray-600 mt-2">Integrations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="key-features py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center lg:items-start">
            <div className="lg:w-1/3 mb-12 lg:mb-0 lg:pr-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-6 lg:sticky lg:top-8">Key Features</h2>
              <p className="text-gray-600">Discover the powerful features that make our verification system stand out from the rest.</p>
            </div>
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: "flash-outline", text: "Fast, accurate verification" },
                  { icon: "git-branch-outline", text: "Seamless integration" },
                  { icon: "cash-outline", text: "Cost-effective solutions" },
                  { icon: "business-outline", text: "Multi-industry support" },
                  { icon: "laptop-outline", text: "User-friendly platform" },
                  { icon: "shield-checkmark-outline", text: "Real-time results" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="mr-4 relative">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
                        <ion-icon name={feature.icon} class="text-2xl text-blue-500 group-hover:text-blue-600 transition-colors duration-300"></ion-icon>
                      </div>
                      <div className="absolute inset-0 bg-blue-100 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">{feature.text}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="verifynow-access py-24 bg-gradient-to-r from-blue-200 to-blue-500"> {/* Darker blue gradient */}
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-16 text-center text-white"> {/* Changed text color to white for contrast */}
            VerifyNow <span className="text-blue-200">Access</span>
          </h2>
          <div ref={missionRef} className="flex flex-col lg:flex-row items-center justify-between opacity-0 transition-opacity duration-1000 ease-out">
            <div className="lg:w-5/12 mb-12 lg:mb-0">
              <div className="relative">
                <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="relative z-10 grid grid-cols-1 gap-6"> 
                  <img
                    src={`${process.env.PUBLIC_URL}/images/verification.png`}
                    alt="Verification Process"
                    className="w-full h-full object-cover rounded-2xl transform hover:scale-105 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-6/12 lg:pl-16">
              <div className="bg-white p-10 rounded-3xl hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-3xl font-semibold mb-8 text-gray-800">Our Comprehensive Verification Services</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Access to major credit bureaus",
                    "CIPC verification",
                    "SARS verification",
                    "Department of Home Affairs",
                    "ID Verification (Fraud Prevention)",
                    "Contact Details verification",
                    "UN Sanctions and SA PEP checks",
                    "AML Database checks",
                    "Interpol list verification",
                    "Deeds Office searches"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center group">
                      <div className="w-10 h-10 mr-4 flex-shrink-0 bg-blue-100 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div ref={visionRef} className="flex flex-col items-center justify-center opacity-0 transition-opacity duration-1000 ease-out my-16">
        <h3 className="text-3xl font-bold mb-8 text-center text-black">How it Works</h3>
        <div className="w-full max-w-4xl">
          <div className="bg-white p-8 rounded-lg">
            <div className="flex flex-col md:flex-row justify-between items-center relative">
              {[
                { icon: "document-text-outline", title: "Submit Request", description: "Provide necessary details" },
                { icon: "cog-outline", title: "We Process", description: "Quick and accurate checks" },
                { icon: "checkmark-circle-outline", title: "Receive Results", description: "Secure delivery of verified info" }
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center mb-8 md:mb-0 w-full md:w-1/3 relative z-10">
                  <div className="bg-[#0a4661] rounded-full p-6 mb-4 w-24 h-24 flex items-center justify-center shadow-lg">
                    <ion-icon name={step.icon} class="text-4xl text-white"></ion-icon>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                  <p className="text-sm text-black-600">{step.description}</p>
                </div>
              ))}
              <div className="hidden md:block absolute top-1/6  left-0 right-0 h-1 bg-[#0a4661] -mt-12 z-0"></div>
            </div>
          </div>
        </div>
      </div>

      
    </main>
  );
}

export default Home;