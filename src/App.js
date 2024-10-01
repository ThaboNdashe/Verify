import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import IdentityVerification from './pages/IdentityVerification';
import BackgroundChecks from './pages/BackgroundChecks';
import ContinuousMonitoring from './pages/ContinuousMonitoring';
import BankConfirmation from './pages/BankConfirmation';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/services/identity-verification" element={<IdentityVerification />} />
            <Route path="/services/background-checks" element={<BackgroundChecks />} />
            <Route path="/services/continuous-monitoring" element={<ContinuousMonitoring />} />
            <Route path="/services/bank-confirmation" element={<BankConfirmation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;