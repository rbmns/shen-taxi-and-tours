
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import Map from './Map';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-shen-navy mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to book your taxi or tour? Get in touch with us for inquiries or reservations.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2 bg-shen-light rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-shen-navy mb-6">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="text-shen-blue mr-4 mt-1" />
                <div>
                  <h4 className="font-medium text-shen-navy">Phone & WhatsApp</h4>
                  <a 
                    href="tel:+94769943935" 
                    className="text-gray-600 hover:text-shen-blue block mb-1"
                  >
                    +94 76 994 3935
                  </a>
                  <a 
                    href="https://wa.me/94769943935" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-shen-blue hover:text-shen-navy"
                  >
                    <MessageSquare size={16} className="mr-1" />
                    <span>Message on WhatsApp</span>
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-shen-blue mr-4 mt-1" />
                <div>
                  <h4 className="font-medium text-shen-navy">Address</h4>
                  <p className="text-gray-600">
                    Polwatta road, Denipitiya weligama<br />
                    South Sri Lanka
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-shen-blue mr-4 mt-1" />
                <div>
                  <h4 className="font-medium text-shen-navy">Booking Information</h4>
                  <p className="text-gray-600">
                    Your booking request is non-binding and payment is made in cash after the services are provided.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="https://wa.me/94769943935" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-shen-blue text-white hover:bg-shen-navy px-6 py-3 rounded-md font-medium transition-all inline-flex items-center"
              >
                <MessageSquare size={18} className="mr-2" />
                Book via WhatsApp
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="h-full rounded-lg overflow-hidden shadow-md">
              <Map />
            </div>
          </div>
        </div>
      </div>
      
      {/* Sticky WhatsApp button - visible on both desktop and mobile */}
      <div className="fixed bottom-6 right-6 z-40">
        <a 
          href="https://wa.me/94769943935" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-shen-blue hover:bg-shen-navy text-white p-4 rounded-full shadow-lg transition-colors"
          aria-label="Contact via WhatsApp"
        >
          <MessageSquare size={24} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
