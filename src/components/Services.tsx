

import { useState } from 'react';
import { Car, Home, Phone, ChevronDown, ChevronUp, Navigation, Map, Bike } from 'lucide-react';
import { cn } from '@/lib/utils';

type Service = {
  id: number;
  title: string;
  icon: React.ReactNode;
  duration: string;
  price: string;
  description?: string;
};

type ServiceCategory = {
  id: string;
  title: string;
  services: Service[];
  defaultExpanded: boolean;
};

const Services = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['taxi']));

  const toggleService = (id: number) => {
    if (expandedService === id) {
      setExpandedService(null);
    } else {
      setExpandedService(id);
    }
  };

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  const serviceCategories: ServiceCategory[] = [
    {
      id: 'taxi',
      title: 'Book a Taxi',
      defaultExpanded: true,
      services: [
        {
          id: 1,
          title: "Taxi - Book a ride",
          icon: <Car className="text-shen-blue" />,
          duration: "30 mins",
          price: "Rs 3,000",
          description: "Quick transportation within the area"
        },
        {
          id: 2,
          title: "Taxi - Airport transfer",
          icon: <Navigation className="text-shen-blue" />,
          duration: "2 hrs 30 mins",
          price: "Rs 22,000",
          description: "Airport pickup/drop-off service"
        },
        {
          id: 3,
          title: "Taxi - Weligama to Ella",
          icon: <Car className="text-shen-blue" />,
          duration: "2 hrs 30 mins",
          price: "Rs 22,000",
          description: "Scenic journey to Ella"
        },
        {
          id: 4,
          title: "Taxi - Weligama to Galle",
          icon: <Car className="text-shen-blue" />,
          duration: "1 hr",
          price: "Rs 8,000",
          description: "Visit historic Galle Fort"
        },
        {
          id: 5,
          title: "Taxi - Weligama to Yala",
          icon: <Car className="text-shen-blue" />,
          duration: "1 hr 20 mins",
          price: "Rs 18,000",
          description: "Travel to Yala National Park"
        },
        {
          id: 6,
          title: "Taxi - Weligama to Udawalawa",
          icon: <Car className="text-shen-blue" />,
          duration: "50 mins",
          price: "Rs 16,000",
          description: "Visit Udawalawa National Park"
        },
        {
          id: 13,
          title: "Airport to Arugam Bay",
          icon: <Navigation className="text-shen-blue" />,
          duration: "± 4 hrs",
          price: "Rs 40,000",
          description: "Direct transfer to Arugam Bay"
        },
        {
          id: 14,
          title: "Airport to Sigiriya",
          icon: <Navigation className="text-shen-blue" />,
          duration: "± 3 hrs",
          price: "Rs 22,000",
          description: "Direct transfer to Sigiriya"
        },
        {
          id: 15,
          title: "Airport to Ella",
          icon: <Navigation className="text-shen-blue" />,
          duration: "± 4 hrs",
          price: "Rs 30,000",
          description: "Direct transfer to Ella"
        }
      ]
    },
    {
      id: 'rentals',
      title: 'Rentals',
      defaultExpanded: false,
      services: [
        {
          id: 7,
          title: "Rent a scooter",
          icon: <Bike className="text-shen-blue" />,
          duration: "± per day",
          price: "Rs 2,500",
          description: "Explore Sri Lanka at your own pace"
        },
        {
          id: 8,
          title: "Rent accommodation (villa)",
          icon: <Home className="text-shen-blue" />,
          duration: "± per day",
          price: "Rs 10,000",
          description: "Comfortable villa accommodations"
        },
        {
          id: 10,
          title: "Rent a Car",
          icon: <Car className="text-shen-blue" />,
          duration: "± per day",
          price: "Rs 10,000",
          description: "Self-drive options for flexibility"
        },
        {
          id: 11,
          title: "Rent a Bicycle",
          icon: <Bike className="text-shen-blue" />,
          duration: "± per day",
          price: "Rs 500",
          description: "Eco-friendly way to explore"
        }
      ]
    },
    {
      id: 'tours',
      title: 'Tours',
      defaultExpanded: false,
      services: [
        {
          id: 12,
          title: "Taxi - Book a tour",
          icon: <Map className="text-shen-blue" />,
          duration: "4 hrs",
          price: "Rs 20,000",
          description: "Customized tours with guide"
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-shen-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-shen-navy mb-4">Our Services & Prices</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our wide range of transportation and tour services. Shen can be anywhere in Sri Lanka. Price depends on pickup and drop-off location.
          </p>
        </div>
        
        {/* Mobile view - Categorized Services */}
        <div className="md:hidden space-y-6">
          {serviceCategories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Category Header */}
              <div 
                className="bg-shen-navy text-white p-4 cursor-pointer flex justify-between items-center"
                onClick={() => toggleCategory(category.id)}
              >
                <h3 className="text-lg font-semibold">{category.title}</h3>
                {expandedCategories.has(category.id) ? 
                  <ChevronUp size={20} /> : 
                  <ChevronDown size={20} />
                }
              </div>
              
              {/* Services List */}
              {expandedCategories.has(category.id) && (
                <div className="divide-y divide-gray-100">
                  {category.services.map((service) => (
                    <div key={service.id}>
                      <div 
                        className="p-3 cursor-pointer"
                        onClick={() => toggleService(service.id)}
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="p-2 bg-shen-light rounded-full mr-2">
                              {service.icon}
                            </div>
                            <div>
                              <h4 className="font-medium text-sm text-shen-navy">{service.title}</h4>
                              <div className="flex text-xs text-gray-600 mt-1">
                                <span className="mr-3">{service.duration}</span>
                                <span className="font-medium text-shen-blue">{service.price}</span>
                              </div>
                            </div>
                          </div>
                          {expandedService === service.id ? 
                            <ChevronUp size={16} className="text-shen-blue" /> : 
                            <ChevronDown size={16} className="text-shen-blue" />
                          }
                        </div>
                        
                        {expandedService === service.id && service.description && (
                          <div className="mt-2 text-xs text-gray-600 animate-fade-in pl-10">
                            <p>{service.description}</p>
                          </div>
                        )}
                      </div>
                      
                      <div className="bg-shen-light px-3 py-2 flex justify-end items-center">
                        <a 
                          href="https://wa.me/94769943935" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs text-shen-blue hover:text-shen-navy flex items-center"
                        >
                          <Phone size={12} className="mr-1" />
                          <span>Book via WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop view - Categorized Table */}
        <div className="hidden md:block space-y-6">
          {serviceCategories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Category Header */}
              <div 
                className="bg-shen-navy text-white px-6 py-4 cursor-pointer flex justify-between items-center"
                onClick={() => toggleCategory(category.id)}
              >
                <h3 className="text-xl font-semibold">{category.title}</h3>
                {expandedCategories.has(category.id) ? 
                  <ChevronUp size={24} /> : 
                  <ChevronDown size={24} />
                }
              </div>
              
              {/* Services Table */}
              {expandedCategories.has(category.id) && (
                <>
                  <div className="bg-shen-light px-6 py-3 flex border-b">
                    <div className="w-2/5 font-semibold text-shen-navy">Service</div>
                    <div className="w-1/6 font-semibold text-center text-shen-navy">Duration</div>
                    <div className="w-1/6 font-semibold text-center text-shen-navy">Price</div>
                    <div className="w-1/4 font-semibold text-shen-navy">Description</div>
                  </div>
                  
                  {category.services.map((service, index) => (
                    <div 
                      key={service.id}
                      className={cn(
                        "border-b border-gray-100 hover:bg-shen-light/50 transition-colors",
                        index === category.services.length - 1 ? "border-b-0" : ""
                      )}
                    >
                      <div className="px-6 py-3 flex items-center">
                        <div className="w-2/5 flex items-center">
                          <div className="p-1 bg-shen-light rounded-full mr-2">
                            {service.icon}
                          </div>
                          <span className="font-medium text-sm text-shen-navy">{service.title}</span>
                        </div>
                        <div className="w-1/6 text-center text-sm text-gray-600">{service.duration}</div>
                        <div className="w-1/6 text-center text-sm font-medium text-shen-blue">{service.price}</div>
                        <div className="w-1/4 text-sm text-gray-600">{service.description}</div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          ))}
          
          <div className="mt-4 flex justify-end">
            <a 
              href="https://wa.me/94769943935" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-shen-blue text-white hover:bg-shen-navy px-4 py-2 rounded-md font-medium transition-all inline-flex items-center text-sm"
            >
              <Phone size={16} className="mr-2" />
              Book via WhatsApp
            </a>
          </div>
        </div>
        
        <div className="mt-8 bg-white p-4 rounded-lg shadow-md text-sm">
          <p className="text-gray-600 text-center">
            <strong>Note:</strong> Price depends on locations and will be confirmed after your booking request. Payment is made in cash after services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;

