
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={cn(
      "fixed w-full z-50 transition-all duration-300",
      scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/06b70267-40b5-4fe1-98c2-e9270aad529d.png" 
              alt="Shen Taxi & Tours Logo" 
              className="h-12 md:h-16"
            />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-shen-navy hover:text-shen-blue font-medium transition">Home</button>
            <button onClick={() => scrollToSection('services')} className="text-shen-navy hover:text-shen-blue font-medium transition">Services</button>
            <button onClick={() => scrollToSection('about')} className="text-shen-navy hover:text-shen-blue font-medium transition">About</button>
            <button onClick={() => scrollToSection('gallery')} className="text-shen-navy hover:text-shen-blue font-medium transition">Gallery</button>
            <button onClick={() => scrollToSection('contact')} className="text-shen-navy hover:text-shen-blue font-medium transition">Contact</button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-shen-navy"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="flex flex-col px-4 pt-2 pb-4 space-y-3">
            <button onClick={() => scrollToSection('home')} className="text-shen-navy py-2 border-b border-gray-100">Home</button>
            <button onClick={() => scrollToSection('services')} className="text-shen-navy py-2 border-b border-gray-100">Services</button>
            <button onClick={() => scrollToSection('about')} className="text-shen-navy py-2 border-b border-gray-100">About</button>
            <button onClick={() => scrollToSection('gallery')} className="text-shen-navy py-2 border-b border-gray-100">Gallery</button>
            <button onClick={() => scrollToSection('contact')} className="text-shen-navy py-2">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
