
import { Phone, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-shen-navy text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-8 md:mb-0">
            <img 
              src="/lovable-uploads/e6354eb5-64ef-490e-ad2b-4a3585f5968b.png" 
              alt="Shen Taxi & Tours Logo" 
              className="h-16 mb-4"
            />
            <p className="text-gray-300 max-w-md mb-4">
              Your trusted transportation and tour service in South Sri Lanka.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/94769943935" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-shen-blue transition"
              >
                <Phone size={20} />
              </a>
              <a 
                href="https://maps.app.goo.gl/ABC123" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-shen-blue transition"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-shen-blue transition">Home</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-shen-blue transition">Services</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-shen-blue transition">About</a></li>
                <li><a href="#gallery" className="text-gray-300 hover:text-shen-blue transition">Gallery</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-shen-blue transition">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Phone size={16} className="mr-2 text-shen-blue" />
                  <a 
                    href="tel:+94769943935" 
                    className="text-gray-300 hover:text-shen-blue transition"
                  >
                    +94 76 994 3935
                  </a>
                </li>
                <li>
                  <p className="text-gray-300">
                    Polwatta road, Denipitiya weligama<br />
                    South Sri Lanka
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 mt-6">
          <p className="text-center text-gray-400">
            &copy; {currentYear} Shen Taxi & Tours. All rights reserved.
         
          </p>
       
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
