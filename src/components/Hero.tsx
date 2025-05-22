
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/156caf17-b601-40ce-80c6-2c883a903c48.png" 
          alt="Taxi Service in Sri Lanka" 
          className="w-full h-full object-cover object-center" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-shen-navy/30 to-shen-navy/70"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 text-center">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/e6354eb5-64ef-490e-ad2b-4a3585f5968b.png" 
              alt="Shen Taxi & Tours Logo" 
              className="h-24 md:h-32"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">Shen Taxi & Tours</h1>
          <p className="text-xl md:text-2xl text-white mb-8 italic drop-shadow-md max-w-2xl mx-auto">
            Your best taxi service in Sri Lanka
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a 
              href="https://wa.me/94769943935" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-shen-blue text-white hover:bg-shen-navy px-6 py-3 rounded-md font-medium transition-all transform hover:scale-105 shadow-lg"
            >
              Book via WhatsApp
            </a>
            <button 
              onClick={scrollToServices}
              className="bg-white text-shen-navy hover:bg-shen-navy hover:text-white px-6 py-3 rounded-md font-medium transition-all transform hover:scale-105 shadow-lg"
            >
              View Services
            </button>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown size={36} />
      </button>
    </section>
  );
};

export default Hero;
