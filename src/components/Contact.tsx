import { useState, useRef } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
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
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-shen-navy mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for bookings, inquiries, or to plan your perfect Sri Lankan experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-shen-light rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold text-shen-navy mb-6">Reach Us</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-shen-blue p-3 rounded-full text-white mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-shen-navy">Phone</h4>
                    <p className="text-gray-600">+94 76 994 3935</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-500 p-3 rounded-full text-white mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-shen-navy">WhatsApp</h4>
                    <p className="text-gray-600">+94 76 994 3935</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-shen-blue p-3 rounded-full text-white mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-shen-navy">Address</h4>
                    <p className="text-gray-600">Weligama, Sri Lanka</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Map />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sticky WhatsApp button with icon */}
      <div className="fixed bottom-6 right-6 z-40">
        <a 
          href="https://wa.me/94769943935" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-all transform hover:scale-110"
          aria-label="Contact us on WhatsApp"
          title="Contact us on WhatsApp"
        >
          <Phone size={28} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
