import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { AboutPage } from './components/AboutPage';
import { ResumePage } from './components/ResumePage';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Smooth scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  const handlePortfolioClick = () => {
    setCurrentPage('portfolio');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <HeroSection onPortfolioClick={handlePortfolioClick} />
            <PortfolioSection />
            <TestimonialsSection />
            <ContactSection />
          </>
        );
      case 'portfolio':
        return (
          <div className="pt-20 min-h-screen bg-gray-50">
            <div className="py-12">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
                <h1 className="text-5xl font-bold text-black mb-4">
                  My <span className="text-[#fd853a]">Portfolio</span>
                </h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Explore my creative work and design projects across various categories and industries
                </p>
              </div>
            </div>
            <PortfolioSection />
            
            {/* Portfolio Gallery - Additional Showcase */}
            <section className="py-20 bg-white">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center text-black mb-16">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[...Array(12)].map((_, index) => (
                    <div key={index} className="group relative aspect-square bg-gray-200 rounded-2xl overflow-hidden cursor-pointer">
                      <div className="w-full h-full bg-gradient-to-br from-orange-200 to-orange-400 flex items-center justify-center">
                        <span className="text-white text-4xl font-bold">{index + 1}</span>
                      </div>
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-center text-white">
                          <h3 className="text-xl font-bold mb-2">Project #{index + 1}</h3>
                          <p className="text-sm">Creative Design Work</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        );
      case 'about':
        return <AboutPage />;
      case 'contact':
        return (
          <div className="pt-20">
            <ContactSection />
          </div>
        );
      case 'resume':
        return <ResumePage />;
      default:
        return (
          <>
            <HeroSection onPortfolioClick={handlePortfolioClick} />
            <PortfolioSection />
            <TestimonialsSection />
            <ContactSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation currentPage={currentPage} onPageChange={handlePageChange} />
      <main>
        {renderCurrentPage()}
      </main>
      
      <Toaster 
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#1f2937',
            color: '#f9fafb',
            border: '1px solid #374151'
          }
        }}
      />
    </div>
  );
}