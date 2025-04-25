import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Consultants from './components/Consultants';
import Testimonials from './components/Testimonials';
import CaseStudies from './components/CaseStudies';
import BlogSection from './components/BlogSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update the page title
    document.title = 'ConsultaPro - Expertos en Gestión Organizacional';
    
    // Set favicon if needed
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href = 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📊</text></svg>';
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Consultants />
        <CaseStudies />
        <Testimonials />
        <BlogSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;