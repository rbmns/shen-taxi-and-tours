
import { ChevronDown, MapPin, Star } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with enhanced overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/156caf17-b601-40ce-80c6-2c883a903c48.png" 
          alt="Taxi Service in Sri Lanka" 
          className="w-full h-full object-cover object-center" 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-shen-navy/40 via-shen-navy/60 to-black/70"></div>
        
        {/* Floating elements for visual interest */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-shen-blue rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-shen-accent rounded-full animate-pulse opacity-40 animation-delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-white rounded-full animate-pulse opacity-30 animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 text-center">
        <div className="animate-fade-in">
          {/* Enhanced title with better typography */}
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 drop-shadow-2xl leading-tight">
              Shen <span className="text-shen-blue">Taxi</span> & Tours
            </h1>
            <div className="flex items-center justify-center gap-2 text-shen-accent">
              <Star size={20} className="fill-current" />
              <Star size={20} className="fill-current" />
              <Star size={20} className="fill-current" />
              <Star size={20} className="fill-current" />
              <Star size={20} className="fill-current" />
            </div>
          </div>
          
          <p className="text-xl md:text-3xl text-white mb-4 italic drop-shadow-lg max-w-3xl mx-auto font-light">
            "Come as a Guest, Leave as a Friend"
          </p>
          
          <div className="flex items-center justify-center gap-2 text-white/80 mb-8">
            <MapPin size={18} />
            <span className="text-sm md:text-base">Serving all of Sri Lanka</span>
          </div>
          
          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a 
              href="https://wa.me/94769943935" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-shen-blue to-shen-navy text-white hover:from-shen-navy hover:to-shen-blue px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-shen-blue/25 border border-white/10"
            >
              <span className="flex items-center justify-center gap-2">
                Book via WhatsApp
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </span>
            </a>
            <button 
              onClick={scrollToServices}
              className="group bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-shen-navy px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl border border-white/20"
            >
              View Services
            </button>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <button 
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce group"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs opacity-80 group-hover:opacity-100 transition-opacity">Scroll down</span>
          <ChevronDown size={36} className="group-hover:scale-110 transition-transform" />
        </div>
      </button>
    </section>
  );
};

export default Hero;
