
import { useState } from 'react';
import { Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: "/lovable-uploads/025ae8f3-6863-43d5-81fb-c144303369bb.png",
      alt: "Shen Taxi on a scenic road in Sri Lanka",
      caption: "Travel in Comfort"
    },
    {
      src: "/lovable-uploads/c668849a-32e7-4b7b-8848-71d21dc8cf47.png",
      alt: "Tourists with Shen Taxi near an elephant",
      caption: "Wildlife Spotting Tours"
    },
    {
      src: "/lovable-uploads/2373adcd-1111-46a8-9ffa-4bd59efd3cd9.png",
      alt: "Shen Taxi logo with Nine Arch Bridge in Ella",
      caption: "Famous Nine Arch Bridge"
    },
    {
      src: "/lovable-uploads/80a2bce6-10f7-421c-8b06-7d8898a04a04.png",
      alt: "Tourists with Shen Taxi at a waterfall",
      caption: "Beautiful Waterfalls"
    },
    {
      src: "/lovable-uploads/96492552-a806-4ba0-b8a5-2ced2529b79c.png",
      alt: "Leopard in Yala National Park",
      caption: "Wildlife Safaris"
    },
    {
      src: "/lovable-uploads/24c052b3-e1a6-46e6-9d93-9fc8e3e9988e.png",
      alt: "Beautiful beach in South Sri Lanka",
      caption: "Stunning Beaches"
    },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-shen-light/50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-shen-navy mb-6 leading-tight">
            Discover <span className="text-shen-blue">Sri Lanka</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-shen-blue to-shen-navy rounded-full mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Explore the beauty and culture of Sri Lanka with Shen Taxi & Tours. Here's a glimpse of what awaits you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white"
              onClick={() => openLightbox(index)}
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Enhanced overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full">
                      <Eye size={24} className="text-white" />
                    </div>
                    <p className="text-white font-medium text-lg">View Image</p>
                  </div>
                </div>
                
                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-semibold text-lg">{image.caption}</p>
                </div>
              </div>
              
              {/* Mobile caption */}
              <div className="p-4 md:hidden">
                <p className="font-semibold text-shen-navy text-center">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4" onClick={closeLightbox}>
          <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button 
              className="absolute -top-12 right-0 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-3 text-white transition-all duration-200" 
              onClick={closeLightbox}
            >
              <X size={24} />
            </button>
            
            {/* Navigation buttons */}
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-3 text-white transition-all duration-200"
              onClick={() => navigateImage('prev')}
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-3 text-white transition-all duration-200"
              onClick={() => navigateImage('next')}
            >
              <ChevronRight size={24} />
            </button>
            
            {/* Image */}
            <div className="relative">
              <img 
                src={images[selectedImage].src} 
                alt={images[selectedImage].alt} 
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
              
              {/* Image info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <p className="text-white text-xl font-semibold text-center">{images[selectedImage].caption}</p>
                <p className="text-white/80 text-center mt-2">{selectedImage + 1} of {images.length}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
