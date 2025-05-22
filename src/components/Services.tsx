
import { useState } from 'react';
import { Car, Navigation, Map, Clock, DollarSign, Phone, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

type Service = {
  id: number;
  title: string;
  icon: React.ReactNode;
  duration: string;
  price: string;
  description?: string;
};

const Services = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleService = (id: number) => {
    if (expandedService === id) {
      setExpandedService(null);
    } else {
      setExpandedService(id);
    }
  };

  const services: Service[] = [
    {
      id: 1,
      title: "Taxi - Book a ride in Sri Lanka",
      icon: <Car className="text-shen-blue" />,
      duration: "30 mins",
      price: "Rs 3,000",
      description: "Quick and reliable transportation for short distances within the area."
    },
    {
      id: 2,
      title: "Taxi - Airport pickup and/or drop-off",
      icon: <Navigation className="text-shen-blue" />,
      duration: "2 hrs 30 mins",
      price: "Rs 22,000",
      description: "Comfortable airport transfers to and from any location in South Sri Lanka."
    },
    {
      id: 3,
      title: "Taxi - Weligama to Ella",
      icon: <Map className="text-shen-blue" />,
      duration: "2 hrs 30 mins",
      price: "Rs 22,000",
      description: "Scenic journey to the beautiful hill country of Ella."
    },
    {
      id: 4,
      title: "Taxi - Weligama to Galle",
      icon: <Map className="text-shen-blue" />,
      duration: "1 hr",
      price: "Rs 8,000",
      description: "Visit the historic Galle Fort and surrounding areas."
    },
    {
      id: 5,
      title: "Taxi - Weligama to Yala",
      icon: <Map className="text-shen-blue" />,
      duration: "1 hr 20 mins",
      price: "Rs 18,000",
      description: "Travel to Yala National Park, famous for its wildlife."
    },
    {
      id: 6,
      title: "Taxi - Weligama to Udawalawa",
      icon: <Map className="text-shen-blue" />,
      duration: "50 mins",
      price: "Rs 16,000",
      description: "Visit Udawalawa National Park, known for its elephant population."
    },
    {
      id: 7,
      title: "Rent a scooter",
      icon: <Car className="text-shen-blue" />,
      duration: "23 hrs 59 mins",
      price: "Rs 2,500",
      description: "Explore Sri Lanka at your own pace with our scooter rentals."
    },
    {
      id: 8,
      title: "Rent accommodation (villa)",
      icon: <Car className="text-shen-blue" />,
      duration: "23 hrs 59 mins",
      price: "Rs 10,000",
      description: "Comfortable villa accommodations for your stay in Sri Lanka."
    },
    {
      id: 9,
      title: "Rent a TukTuk - per day",
      icon: <Car className="text-shen-blue" />,
      duration: "23 hrs 59 mins",
      price: "Rs 2,200",
      description: "Experience Sri Lanka like a local with our TukTuk rentals."
    },
    {
      id: 10,
      title: "Rent a Car - per day",
      icon: <Car className="text-shen-blue" />,
      duration: "23 hrs 59 mins",
      price: "Rs 10,000",
      description: "Self-drive options for maximum flexibility during your travels."
    },
    {
      id: 11,
      title: "Rent a Bicycle - per day",
      icon: <Car className="text-shen-blue" />,
      duration: "23 hrs 59 mins",
      price: "Rs 500",
      description: "Eco-friendly way to explore the beautiful surroundings."
    },
    {
      id: 12,
      title: "Taxi - Book a tour",
      icon: <Map className="text-shen-blue" />,
      duration: "4 hrs",
      price: "Rs 15,000",
      description: "Customized tours to explore the best of Sri Lanka with a knowledgeable guide."
    },
  ];

  return (
    <section id="services" className="py-20 bg-shen-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-shen-navy mb-4">Our Services & Prices</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our wide range of transportation and tour services. Exact price depends on pickup and drop-off location and will be confirmed after your booking request.
          </p>
        </div>
        
        {/* Mobile view - Cards */}
        <div className="md:hidden grid grid-cols-1 gap-6">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={cn(
                "bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300",
                expandedService === service.id ? "transform scale-[1.02]" : ""
              )}
            >
              <div 
                className="p-6 cursor-pointer"
                onClick={() => toggleService(service.id)}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <div className="p-3 bg-shen-light rounded-full mr-4">
                      {service.icon}
                    </div>
                    <h3 className="font-medium text-lg text-shen-navy">{service.title}</h3>
                  </div>
                  {expandedService === service.id ? 
                    <ChevronUp className="text-shen-blue" /> : 
                    <ChevronDown className="text-shen-blue" />
                  }
                </div>
                
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Clock size={16} className="mr-2" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <DollarSign size={16} className="mr-2" />
                    <span>{service.price}</span>
                  </div>
                </div>
                
                {expandedService === service.id && service.description && (
                  <div className="mt-4 text-gray-600 animate-fade-in">
                    <p>{service.description}</p>
                  </div>
                )}
              </div>
              
              <div className="bg-shen-light px-6 py-3 flex justify-between items-center">
                <span className="text-shen-navy font-medium">Book Now</span>
                <a 
                  href="https://wa.me/94769943935" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-shen-blue hover:text-shen-navy flex items-center"
                >
                  <Phone size={16} className="mr-1" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop view - Horizontal list */}
        <div className="hidden md:block">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-shen-navy text-white px-6 py-4 flex">
              <div className="w-1/3 font-semibold">Service</div>
              <div className="w-1/6 font-semibold text-center">Duration</div>
              <div className="w-1/6 font-semibold text-center">Price</div>
              <div className="w-1/3 font-semibold">Description</div>
            </div>
            
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={cn(
                  "border-b border-gray-100 hover:bg-shen-light/50 transition-colors",
                  index === services.length - 1 ? "border-b-0" : ""
                )}
              >
                <div className="px-6 py-4 flex items-center">
                  <div className="w-1/3 flex items-center">
                    <div className="p-2 bg-shen-light rounded-full mr-3">
                      {service.icon}
                    </div>
                    <span className="font-medium text-shen-navy">{service.title}</span>
                  </div>
                  <div className="w-1/6 text-center text-gray-600">{service.duration}</div>
                  <div className="w-1/6 text-center font-medium text-shen-blue">{service.price}</div>
                  <div className="w-1/3 text-gray-600 pr-2">{service.description}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 flex justify-end">
            <a 
              href="https://wa.me/94769943935" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-shen-blue text-white hover:bg-shen-navy px-6 py-3 rounded-md font-medium transition-all inline-flex items-center"
            >
              <Phone size={18} className="mr-2" />
              Book via WhatsApp
            </a>
          </div>
        </div>
        
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600 text-center">
            <strong>Note:</strong> Exact price depends on pickup and drop-off location and will be agreed and confirmed after your booking request. Your booking request is non-binding and payment is made in cash after the services are provided.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
