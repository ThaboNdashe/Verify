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
    <main className="relative"> {/* Remove pt-20 class */}
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

      <section className="about-us py-16">
        <div className="container mx-auto px-4">
          <div className="w-full md:w-10/12 mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6 text-black-700 text-center rounded-lg shadow-md">Empowering Businesses with Accurate and Instant Identity Verification Solutions</h2>
            <div className="bg-[#0a4661] p-8 rounded-lg shadow-md">
              <p className="text-lg mb-4 text-white">
                VerifyNow offers seamless and secure identity verification and background check services tailored to your needs. Our cutting-edge solutions provide businesses with the confidence they need to make informed decisions quickly and securely.
              </p>
              <p className="text-lg text-white">
                Whether you're onboarding new employees, verifying tenant information, or conducting thorough background checks, VerifyNow ensures accuracy, reliability, and compliance with evolving regulatory requirements.
              </p>
            </div>
          </div>
          
        </div>
      </section>

      <section className="key-features py-16 bg-white-100 ">
        <div className="container mx-auto px-4 ">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {[{ icon: "flash-outline", text: "Fast, accurate verification processes" },
            { icon: "git-branch-outline", text: "Seamless integration with existing systems" },
            { icon: "cash-outline", text: "Cost-effective and scalable solutions" },
            { icon: "business-outline", text: "Support across multiple industries" },
            { icon: "laptop-outline", text: "Easy-to-use platform with real-time results" }].map((feature, index) => (
              <div key={index} className="flex items-center bg-[#0a4661] p-4 rounded-lg shadow-md">
                <ion-icon name={feature.icon} class="text-4xl text-white mr-4"></ion-icon>
                <p className="text-lg text-white">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="key-features py-16 bg-white-100 ">
      <div ref={missionRef} className="flex flex-col md:flex-row items-start justify-between opacity-0 transition-opacity duration-1000 ease-out mb-16 px-4 md:px-10">
        <div className="md:w-4/12 mb-8 md:mb-0"> {/* Decreased from 5/12 to 4/12 */}
          <img
            src={`${process.env.PUBLIC_URL}/images/access.png`}
            alt="Our Mission"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-7/12"> {/* Increased from 6/12 to 7/12 */}
          <h3 className="text-3xl font-bold mb-8 text-center text-black">VerifyNow Access</h3>
          <div className="bg-[#0a4661] p-6 rounded-lg shadow-md">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white text-sm"> {/* Added text-sm to reduce text size */}
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Access to all major credit bureaus</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>CIPC</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>SARS</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Department of Home Affairs</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>ID Verifications (Fraud Prevention)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Contact Details</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>UN Sanctions and SA PEP (politically exposed person)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>World Wide Consolidate AML Database (AML - anti-money laundering) check</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Interpol list</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Deeds Offices</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </section>

      <div ref={visionRef} className="flex flex-col items-center justify-center opacity-0 transition-opacity duration-1000 ease-out my-16">
        <h3 className="text-3xl font-bold mb-8 text-center text-black">How it Works</h3>
        <div className="w-full max-w-4xl">
          <div className="bg-white p-8 rounded-lg shadow-md">
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

      <section className="features py-16 bg-gradient-to-tr from-[#0a4661] to-[#235469]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
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
            }].map((feature, index) => (
              <div 
                key={index}
                ref={featureRefs[index]}
                className="feature-item text-center p-6 bg-white rounded-lg shadow-md opacity-0 translate-y-10 transition-all duration-500 ease-out flex flex-col justify-between"
              >
                <div>
                  <ion-icon name={feature.icon} class="text-5xl text-primary-500 mb-4"></ion-icon>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                </div>
                <Link 
                  to={feature.link}
                  className="inline-block bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600 transition-colors duration-300 mt-4"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;