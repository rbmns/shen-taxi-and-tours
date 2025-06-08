
import { MapPin, Users, Star, Award, Clock, Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-shen-light/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Enhanced image section */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-shen-blue to-shen-navy rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <img 
                src="/lovable-uploads/d1662dc2-9f02-4ac7-9d24-afd9fed4ba92.png" 
                alt="Shen Taxi & Tours Driver with Car" 
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover transform group-hover:scale-[1.02] transition duration-500"
              />
              
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-shen-blue text-white px-4 py-2 rounded-full shadow-lg transform rotate-12">
                <div className="flex items-center gap-1">
                  <Star size={16} className="fill-current" />
                  <span className="text-sm font-semibold">Trusted</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            {/* Enhanced title */}
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-shen-navy mb-4 leading-tight">
                About <span className="text-shen-blue">Shen</span> Taxi & Tours
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-shen-blue to-shen-navy rounded-full"></div>
            </div>
            
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Welcome to Shen Taxi & Tours, your trusted transportation and tour service in South Sri Lanka. We pride ourselves on providing reliable, comfortable, and personalized service to make your journey in Sri Lanka memorable.
            </p>
            
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Whether you need a quick ride around Weligama, an airport transfer, or a comprehensive tour of Sri Lanka's beautiful attractions, we've got you covered. Our experienced drivers are knowledgeable about the local area and committed to ensuring your safety and comfort.
            </p>
            
            {/* Enhanced info cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-shen-light hover:border-shen-blue/30">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-shen-blue to-shen-navy rounded-lg text-white group-hover:scale-110 transition-transform">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-shen-navy mb-2">Location</h4>
                    <p className="text-gray-600 text-sm">Polwatta road, Denipitiya weligama, South Sri Lanka</p>
                  </div>
                </div>
              </div>
              
              <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-shen-light hover:border-shen-blue/30">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-shen-blue to-shen-navy rounded-lg text-white group-hover:scale-110 transition-transform">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-shen-navy mb-2">Our Commitment</h4>
                    <p className="text-gray-600 text-sm">"Come as a Guest, Leave as a Friend" - We treat every customer like family</p>
                  </div>
                </div>
              </div>
              
              <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-shen-light hover:border-shen-blue/30">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-shen-blue to-shen-navy rounded-lg text-white group-hover:scale-110 transition-transform">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-shen-navy mb-2">Experience</h4>
                    <p className="text-gray-600 text-sm">Professional drivers with extensive knowledge of Sri Lanka</p>
                  </div>
                </div>
              </div>
              
              <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-shen-light hover:border-shen-blue/30">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-shen-blue to-shen-navy rounded-lg text-white group-hover:scale-110 transition-transform">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-shen-navy mb-2">24/7 Service</h4>
                    <p className="text-gray-600 text-sm">Available anytime, anywhere in Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced CTA button */}
            <a 
              href="https://wa.me/94769943935" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-shen-blue to-shen-navy text-white hover:from-shen-navy hover:to-shen-blue px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Contact Us
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
