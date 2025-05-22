
import { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: "/lovable-uploads/156caf17-b601-40ce-80c6-2c883a903c48.png",
      alt: "Shen Taxi on a scenic road in Sri Lanka",
      caption: "Travel in comfort along Sri Lanka's beautiful roads"
    },
    {
      src: "/lovable-uploads/c668849a-32e7-4b7b-8848-71d21dc8cf47.png",
      alt: "Tourists with Shen Taxi near an elephant",
      caption: "Wildlife spotting tours with Shen Taxi"
    },
    {
      src: "/lovable-uploads/2373adcd-1111-46a8-9ffa-4bd59efd3cd9.png",
      alt: "Shen Taxi logo with Nine Arch Bridge in Ella",
      caption: "Visit the famous Nine Arch Bridge in Ella"
    },
    {
      src: "/lovable-uploads/80a2bce6-10f7-421c-8b06-7d8898a04a04.png",
      alt: "Tourists with Shen Taxi at a waterfall",
      caption: "Explore beautiful waterfalls with our tours"
    },
    {
      src: "/lovable-uploads/96492552-a806-4ba0-b8a5-2ced2529b79c.png",
      alt: "Leopard in Yala National Park",
      caption: "Wildlife safaris to spot leopards at Yala National Park"
    },
    {
      src: "/lovable-uploads/24c052b3-e1a6-46e6-9d93-9fc8e3e9988e.png",
      alt: "Beautiful beach in South Sri Lanka",
      caption: "Visit stunning beaches around South Sri Lanka"
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
    <section id="gallery" className="py-20 bg-shen-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-shen-navy mb-4">Discover Sri Lanka</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the beauty and culture of Sri Lanka with Shen Taxi & Tours. Here's a glimpse of what awaits you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-md group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-shen-navy/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-4 font-medium">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4" onClick={closeLightbox}>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 z-10 bg-shen-navy rounded-full p-2 text-white" 
              onClick={closeLightbox}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-shen-navy rounded-full p-2 text-white"
              onClick={() => navigateImage('prev')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <img 
              src={images[selectedImage].src} 
              alt={images[selectedImage].alt} 
              className="w-full max-h-[80vh] object-contain"
            />
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-shen-navy rounded-full p-2 text-white"
              onClick={() => navigateImage('next')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
            <p className="text-white text-center mt-4">{images[selectedImage].caption}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
