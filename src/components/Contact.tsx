
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

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
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15872.615456095274!2d80.41247011745898!3d5.973976400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae138d151538e6d%3A0xaa446ab9d8a3b37d!2sWeligama!5e0!3m2!1sen!2slk!4v1621498089101!5m2!1sen!2slk" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: "400px" }} 
                allowFullScreen 
                loading="lazy"
                title="Shen Taxi & Tours Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
