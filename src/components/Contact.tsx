
import { useState, useRef } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import Map from './Map';

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('submitted');
      if (formRef.current) {
        formRef.current.reset();
      }
      
      // Reset status after showing success message
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white to-shen-light/30">
      <div className="w-full px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-shen-navy mb-6 leading-tight">
            Contact <span className="text-shen-blue">Us</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-shen-blue to-shen-navy rounded-full mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Get in touch with us for bookings, inquiries, or to plan your perfect Sri Lankan experience.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Contact Information */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-shen-light">
            {/* Header */}
            <div className="bg-gradient-to-r from-shen-blue to-shen-navy p-8 text-white">
              <div className="flex items-center justify-center gap-3 mb-4">
                <MessageCircle size={32} />
                <h3 className="text-2xl md:text-3xl font-bold">Get In Touch</h3>
              </div>
              <p className="text-center text-lg opacity-90">We're here to help you explore Sri Lanka</p>
            </div>
            
            {/* Contact methods */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="group">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-4 bg-green-500 rounded-full text-white group-hover:scale-110 transition-transform">
                        <Phone size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-shen-navy mb-2 text-lg">WhatsApp</h4>
                        <p className="text-gray-600 mb-3">Available 24/7 for instant booking</p>
                        <a 
                          href="https://wa.me/94769943935" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors font-medium"
                        >
                          <Phone size={16} />
                          +94 76 994 3935
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="bg-gradient-to-br from-shen-light to-blue-50 p-6 rounded-2xl border border-shen-blue/20 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-4 bg-shen-blue rounded-full text-white group-hover:scale-110 transition-transform">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-shen-navy mb-2 text-lg">Location</h4>
                        <p className="text-gray-600 mb-3">Find us in South Sri Lanka</p>
                        <div className="text-gray-700">
                          <p className="font-medium">Polwatta Road</p>
                          <p>Denipitiya, Weligama</p>
                          <p>South Sri Lanka</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Map */}
              <div className="rounded-2xl overflow-hidden shadow-xl border border-shen-light">
                <Map />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Sticky WhatsApp button */}
      <div className="fixed bottom-6 right-6 z-40">
        <a 
          href="https://wa.me/94769943935" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all transform hover:scale-110 border-4 border-white"
          aria-label="Contact us on WhatsApp"
          title="Contact us on WhatsApp"
        >
          <Phone size={28} className="group-hover:animate-pulse" />
          
          {/* Notification badge */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Contact;
