
import { MapPin, Users, Star } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <img 
              src="/lovable-uploads/d1662dc2-9f02-4ac7-9d24-afd9fed4ba92.png" 
              alt="Shen Taxi & Tours Driver with Car" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-shen-navy mb-6">About Shen Taxi & Tours</h2>
            
            <p className="text-gray-600 mb-6">
              Welcome to Shen Taxi & Tours, your trusted transportation and tour service in South Sri Lanka. We pride ourselves on providing reliable, comfortable, and personalized service to make your journey in Sri Lanka memorable.
            </p>
            
            <p className="text-gray-600 mb-6">
              Whether you need a quick ride around Weligama, an airport transfer, or a comprehensive tour of Sri Lanka's beautiful attractions, we've got you covered. Our experienced drivers are knowledgeable about the local area and committed to ensuring your safety and comfort.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <MapPin className="text-shen-blue mr-3" />
                <div>
                  <h4 className="font-medium text-shen-navy">Location</h4>
                  <p className="text-gray-600">Polwatta road, Denipitiya weligama, South Sri Lanka</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Users className="text-shen-blue mr-3" />
                <div>
                  <h4 className="font-medium text-shen-navy">Our Commitment</h4>
                  <p className="text-gray-600">"Come as a Guest, Leave as a Friend" - We treat every customer like family</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Star className="text-shen-blue mr-3" />
                <div>
                  <h4 className="font-medium text-shen-navy">Experience</h4>
                  <p className="text-gray-600">Professional drivers with extensive knowledge of Sri Lanka</p>
                </div>
              </div>
            </div>
            
            <a 
              href="https://wa.me/94769943935" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-shen-blue text-white hover:bg-shen-navy px-6 py-3 rounded-md font-medium transition-all inline-block"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
